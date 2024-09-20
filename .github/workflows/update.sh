#!/bin/bash

set -euxo pipefail

src_repo=https://github.com/ttab/elephant-api.git
checkout=$(mktemp -d -t ele-api-XXX)
node_modules=$(mktemp -d -t ele-npm-XXX)
tag=${1:-}

function cleanup {
  rm -rf $checkout
  rm -rf $node_modules
}

trap cleanup EXIT

if [ -z "$tag" ]; then
    git clone $src_repo $checkout

    # Get the latest tag
    tag=$(git -C $checkout describe --tags --abbrev=0)

    git -C $checkout checkout $tag
else
    git clone --depth 1 --branch $tag $src_repo
fi

# Check if the tag already exists in the current repo.
if git rev-parse "$tag" >/dev/null 2>&1; then
    echo "Tag already exist, no code generation is necessary"
    exit 0
fi

# Get protobuf sources
for dir in index newsdoc repository; do
    mkdir -p "proto/$dir"
    cp $checkout/$dir/*.proto proto/$dir/
done

# Build the docker image, just temporary, should live in a separate repo.
docker buildx build \
       -t node-protobuf --load \
       --build-arg="protoc_version=24.4-r1" ./src

docker run --rm \
       -v "$(pwd):/usr/src" \
       -v "${node_modules}:/usr/src/node_modules" \
       -u "$(id -u):$(id -u)" \
       -w "/usr/src" \
       node-protobuf sh -c "npm install --ignore-scripts"

services="index repository"

service_index=

# Generate clients
for service in $services; do
    docker run --rm \
           -v "$(pwd):/usr/src" \
           -v "${node_modules}:/usr/src/node_modules" \
           -u "$(id -u):$(id -u)" \
           -w "/usr/src" \
           node-protobuf protoc \
           --ts_out src/ \
           --ts_opt generate_dependencies \
           --ts_opt ts_nocheck \
           --ts_opt eslint_disable \
           --proto_path /usr/src/proto \
           $service/service.proto

    cat > src/$service/index.ts <<EOF
export * from './service.client.ts'
export * from './service.ts'
EOF
done

npm run build
npm version $tag


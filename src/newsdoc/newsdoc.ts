/* eslint-disable */
// @generated by protobuf-ts 2.9.4 with parameter generate_dependencies,ts_nocheck,eslint_disable
// @generated from protobuf file "newsdoc/newsdoc.proto" (package "newsdoc", syntax proto3)
// tslint:disable
// @ts-nocheck
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import { WireType } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * Document is a NewsDoc document.
 *
 * @generated from protobuf message newsdoc.Document
 */
export interface Document {
    /**
     * UUID is a unique ID for the document, this can for example be a
     * random v4 UUID, or a URI-derived v5 UUID.
     *
     * @generated from protobuf field: string uuid = 1;
     */
    uuid: string;
    /**
     * Type is the content type of the document.
     *
     * @generated from protobuf field: string type = 2;
     */
    type: string;
    /**
     * URI identifies the document (in a more human-readable way than the
     * UUID).
     *
     * @generated from protobuf field: string uri = 3;
     */
    uri: string;
    /**
     * URL is the browseable location of the document (if any).
     *
     * @generated from protobuf field: string url = 4;
     */
    url: string;
    /**
     * Title is the title of the document, can be used as the document name,
     * or the headline when the document is displayed.
     *
     * @generated from protobuf field: string title = 5;
     */
    title: string;
    /**
     * Content is the content of the document, this is essentially what gets
     * rendered on the page when you view a document.
     *
     * @generated from protobuf field: repeated newsdoc.Block content = 6;
     */
    content: Block[];
    /**
     * Meta is the metadata for a document, this could be things like
     * teasers, open graph data, newsvalues.
     *
     * @generated from protobuf field: repeated newsdoc.Block meta = 7;
     */
    meta: Block[];
    /**
     * Links are links to other resources and entities. This could be links
     * to topics, categories and subjects for the document, or credited
     * authors.
     *
     * @generated from protobuf field: repeated newsdoc.Block links = 8;
     */
    links: Block[];
    /**
     * Language is the language used in the document as an IETF language
     * tag. F.ex. "en", "en-UK", "es", or "sv-SE".
     *
     * @generated from protobuf field: string language = 9;
     */
    language: string;
}
/**
 * Block is the building block for data embedded in documents. It is used for
 * both content, links and metadata. Blocks have can be nested, but that's
 * nothing to strive for, keep it simple.
 *
 * @generated from protobuf message newsdoc.Block
 */
export interface Block {
    /**
     * ID is the block ID,
     *
     * @generated from protobuf field: string id = 1;
     */
    id: string;
    /**
     * UUID is used to reference another Document in a block.
     *
     * @generated from protobuf field: string uuid = 2;
     */
    uuid: string;
    /**
     * URI is used to reference another entity in a document.
     *
     * @generated from protobuf field: string uri = 3;
     */
    uri: string;
    /**
     * URL is a browseable URL for the the block.
     *
     * @generated from protobuf field: string url = 4;
     */
    url: string;
    /**
     * Type is the type of the block
     *
     * @generated from protobuf field: string type = 5;
     */
    type: string;
    /**
     * Title is the title/headline of the block, typically used in the
     * presentation of the block.
     *
     * @generated from protobuf field: string title = 6;
     */
    title: string;
    /**
     * Data contains block data.
     *
     * @generated from protobuf field: map<string, string> data = 7;
     */
    data: {
        [key: string]: string;
    };
    /**
     * Rel describes the relationship to the document/parent entity.
     *
     * @generated from protobuf field: string rel = 8;
     */
    rel: string;
    /**
     * Role is used either as an alternative to rel, or for nuancing the
     * relationship.
     *
     * @generated from protobuf field: string role = 9;
     */
    role: string;
    /**
     * Name is a name for the block. An alternative to "rel" when
     * relationship is a term that doesn't fit.
     *
     * @generated from protobuf field: string name = 10;
     */
    name: string;
    /**
     * Value is a value for the block. Useful when we want to store a
     * primitive value.
     *
     * @generated from protobuf field: string value = 11;
     */
    value: string;
    /**
     * ContentType is used to describe the content type of the block/linked
     * entity if it differs from the type of the block.
     *
     * @generated from protobuf field: string contenttype = 12;
     */
    contenttype: string;
    /**
     * Links are used to link to other resources and documents.
     *
     * @generated from protobuf field: repeated newsdoc.Block links = 13;
     */
    links: Block[];
    /**
     * Content is used to embed content blocks.
     *
     * @generated from protobuf field: repeated newsdoc.Block content = 14;
     */
    content: Block[];
    /**
     * Meta is used to embed metadata
     *
     * @generated from protobuf field: repeated newsdoc.Block meta = 15;
     */
    meta: Block[];
    /**
     * Sensitivity can be use to communicate how the information in a block
     * can be handled. It could f.ex. be set to "internal", to show that it
     * contains information that must be removed or transformed before
     * publishing.
     *
     * @generated from protobuf field: string sensitivity = 16;
     */
    sensitivity: string;
}
// @generated message type with reflection information, may provide speed optimized methods
class Document$Type extends MessageType<Document> {
    constructor() {
        super("newsdoc.Document", [
            { no: 1, name: "uuid", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "type", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "uri", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "url", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 5, name: "title", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 6, name: "content", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => Block },
            { no: 7, name: "meta", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => Block },
            { no: 8, name: "links", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => Block },
            { no: 9, name: "language", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<Document>): Document {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.uuid = "";
        message.type = "";
        message.uri = "";
        message.url = "";
        message.title = "";
        message.content = [];
        message.meta = [];
        message.links = [];
        message.language = "";
        if (value !== undefined)
            reflectionMergePartial<Document>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Document): Document {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string uuid */ 1:
                    message.uuid = reader.string();
                    break;
                case /* string type */ 2:
                    message.type = reader.string();
                    break;
                case /* string uri */ 3:
                    message.uri = reader.string();
                    break;
                case /* string url */ 4:
                    message.url = reader.string();
                    break;
                case /* string title */ 5:
                    message.title = reader.string();
                    break;
                case /* repeated newsdoc.Block content */ 6:
                    message.content.push(Block.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated newsdoc.Block meta */ 7:
                    message.meta.push(Block.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated newsdoc.Block links */ 8:
                    message.links.push(Block.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* string language */ 9:
                    message.language = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: Document, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string uuid = 1; */
        if (message.uuid !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.uuid);
        /* string type = 2; */
        if (message.type !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.type);
        /* string uri = 3; */
        if (message.uri !== "")
            writer.tag(3, WireType.LengthDelimited).string(message.uri);
        /* string url = 4; */
        if (message.url !== "")
            writer.tag(4, WireType.LengthDelimited).string(message.url);
        /* string title = 5; */
        if (message.title !== "")
            writer.tag(5, WireType.LengthDelimited).string(message.title);
        /* repeated newsdoc.Block content = 6; */
        for (let i = 0; i < message.content.length; i++)
            Block.internalBinaryWrite(message.content[i], writer.tag(6, WireType.LengthDelimited).fork(), options).join();
        /* repeated newsdoc.Block meta = 7; */
        for (let i = 0; i < message.meta.length; i++)
            Block.internalBinaryWrite(message.meta[i], writer.tag(7, WireType.LengthDelimited).fork(), options).join();
        /* repeated newsdoc.Block links = 8; */
        for (let i = 0; i < message.links.length; i++)
            Block.internalBinaryWrite(message.links[i], writer.tag(8, WireType.LengthDelimited).fork(), options).join();
        /* string language = 9; */
        if (message.language !== "")
            writer.tag(9, WireType.LengthDelimited).string(message.language);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message newsdoc.Document
 */
export const Document = new Document$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Block$Type extends MessageType<Block> {
    constructor() {
        super("newsdoc.Block", [
            { no: 1, name: "id", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "uuid", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "uri", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "url", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 5, name: "type", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 6, name: "title", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 7, name: "data", kind: "map", K: 9 /*ScalarType.STRING*/, V: { kind: "scalar", T: 9 /*ScalarType.STRING*/ } },
            { no: 8, name: "rel", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 9, name: "role", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 10, name: "name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 11, name: "value", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 12, name: "contenttype", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 13, name: "links", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => Block },
            { no: 14, name: "content", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => Block },
            { no: 15, name: "meta", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => Block },
            { no: 16, name: "sensitivity", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<Block>): Block {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.id = "";
        message.uuid = "";
        message.uri = "";
        message.url = "";
        message.type = "";
        message.title = "";
        message.data = {};
        message.rel = "";
        message.role = "";
        message.name = "";
        message.value = "";
        message.contenttype = "";
        message.links = [];
        message.content = [];
        message.meta = [];
        message.sensitivity = "";
        if (value !== undefined)
            reflectionMergePartial<Block>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Block): Block {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string id */ 1:
                    message.id = reader.string();
                    break;
                case /* string uuid */ 2:
                    message.uuid = reader.string();
                    break;
                case /* string uri */ 3:
                    message.uri = reader.string();
                    break;
                case /* string url */ 4:
                    message.url = reader.string();
                    break;
                case /* string type */ 5:
                    message.type = reader.string();
                    break;
                case /* string title */ 6:
                    message.title = reader.string();
                    break;
                case /* map<string, string> data */ 7:
                    this.binaryReadMap7(message.data, reader, options);
                    break;
                case /* string rel */ 8:
                    message.rel = reader.string();
                    break;
                case /* string role */ 9:
                    message.role = reader.string();
                    break;
                case /* string name */ 10:
                    message.name = reader.string();
                    break;
                case /* string value */ 11:
                    message.value = reader.string();
                    break;
                case /* string contenttype */ 12:
                    message.contenttype = reader.string();
                    break;
                case /* repeated newsdoc.Block links */ 13:
                    message.links.push(Block.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated newsdoc.Block content */ 14:
                    message.content.push(Block.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated newsdoc.Block meta */ 15:
                    message.meta.push(Block.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* string sensitivity */ 16:
                    message.sensitivity = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    private binaryReadMap7(map: Block["data"], reader: IBinaryReader, options: BinaryReadOptions): void {
        let len = reader.uint32(), end = reader.pos + len, key: keyof Block["data"] | undefined, val: Block["data"][any] | undefined;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.string();
                    break;
                case 2:
                    val = reader.string();
                    break;
                default: throw new globalThis.Error("unknown map entry field for field newsdoc.Block.data");
            }
        }
        map[key ?? ""] = val ?? "";
    }
    internalBinaryWrite(message: Block, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string id = 1; */
        if (message.id !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.id);
        /* string uuid = 2; */
        if (message.uuid !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.uuid);
        /* string uri = 3; */
        if (message.uri !== "")
            writer.tag(3, WireType.LengthDelimited).string(message.uri);
        /* string url = 4; */
        if (message.url !== "")
            writer.tag(4, WireType.LengthDelimited).string(message.url);
        /* string type = 5; */
        if (message.type !== "")
            writer.tag(5, WireType.LengthDelimited).string(message.type);
        /* string title = 6; */
        if (message.title !== "")
            writer.tag(6, WireType.LengthDelimited).string(message.title);
        /* map<string, string> data = 7; */
        for (let k of globalThis.Object.keys(message.data))
            writer.tag(7, WireType.LengthDelimited).fork().tag(1, WireType.LengthDelimited).string(k).tag(2, WireType.LengthDelimited).string(message.data[k]).join();
        /* string rel = 8; */
        if (message.rel !== "")
            writer.tag(8, WireType.LengthDelimited).string(message.rel);
        /* string role = 9; */
        if (message.role !== "")
            writer.tag(9, WireType.LengthDelimited).string(message.role);
        /* string name = 10; */
        if (message.name !== "")
            writer.tag(10, WireType.LengthDelimited).string(message.name);
        /* string value = 11; */
        if (message.value !== "")
            writer.tag(11, WireType.LengthDelimited).string(message.value);
        /* string contenttype = 12; */
        if (message.contenttype !== "")
            writer.tag(12, WireType.LengthDelimited).string(message.contenttype);
        /* repeated newsdoc.Block links = 13; */
        for (let i = 0; i < message.links.length; i++)
            Block.internalBinaryWrite(message.links[i], writer.tag(13, WireType.LengthDelimited).fork(), options).join();
        /* repeated newsdoc.Block content = 14; */
        for (let i = 0; i < message.content.length; i++)
            Block.internalBinaryWrite(message.content[i], writer.tag(14, WireType.LengthDelimited).fork(), options).join();
        /* repeated newsdoc.Block meta = 15; */
        for (let i = 0; i < message.meta.length; i++)
            Block.internalBinaryWrite(message.meta[i], writer.tag(15, WireType.LengthDelimited).fork(), options).join();
        /* string sensitivity = 16; */
        if (message.sensitivity !== "")
            writer.tag(16, WireType.LengthDelimited).string(message.sensitivity);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message newsdoc.Block
 */
export const Block = new Block$Type();
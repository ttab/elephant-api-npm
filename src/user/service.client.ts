/* eslint-disable */
// @generated by protobuf-ts 2.9.4 with parameter generate_dependencies,ts_nocheck,eslint_disable
// @generated from protobuf file "user/service.proto" (package "elephant.user", syntax proto3)
// tslint:disable
// @ts-nocheck
import type { RpcTransport } from "@protobuf-ts/runtime-rpc";
import type { ServiceInfo } from "@protobuf-ts/runtime-rpc";
import { Messages } from "./service";
import type { DeleteInboxMessageResponse } from "./service";
import type { DeleteInboxMessageRequest } from "./service";
import type { UpdateInboxMessageResponse } from "./service";
import type { UpdateInboxMessageRequest } from "./service";
import type { ListInboxMessagesResponse } from "./service";
import type { ListInboxMessagesRequest } from "./service";
import type { PollInboxMessagesResponse } from "./service";
import type { PollInboxMessagesRequest } from "./service";
import type { PollMessagesResponse } from "./service";
import type { PollMessagesRequest } from "./service";
import type { PushInboxMessageResponse } from "./service";
import type { PushInboxMessageRequest } from "./service";
import { stackIntercept } from "@protobuf-ts/runtime-rpc";
import type { PushMessageResponse } from "./service";
import type { PushMessageRequest } from "./service";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
/**
 * @generated from protobuf service elephant.user.Messages
 */
export interface IMessagesClient {
    /**
     * Pushes a new message to a recipient.
     *
     * @generated from protobuf rpc: PushMessage(elephant.user.PushMessageRequest) returns (elephant.user.PushMessageResponse);
     */
    pushMessage(input: PushMessageRequest, options?: RpcOptions): UnaryCall<PushMessageRequest, PushMessageResponse>;
    /**
     * Pushes a new inbox message to a recipient.
     *
     * @generated from protobuf rpc: PushInboxMessage(elephant.user.PushInboxMessageRequest) returns (elephant.user.PushInboxMessageResponse);
     */
    pushInboxMessage(input: PushInboxMessageRequest, options?: RpcOptions): UnaryCall<PushInboxMessageRequest, PushInboxMessageResponse>;
    /**
     * Polls for new messages for a recipient.
     *
     * @generated from protobuf rpc: PollMessages(elephant.user.PollMessagesRequest) returns (elephant.user.PollMessagesResponse);
     */
    pollMessages(input: PollMessagesRequest, options?: RpcOptions): UnaryCall<PollMessagesRequest, PollMessagesResponse>;
    /**
     * Polls for new inbox messages for a recipient.
     *
     * @generated from protobuf rpc: PollInboxMessages(elephant.user.PollInboxMessagesRequest) returns (elephant.user.PollInboxMessagesResponse);
     */
    pollInboxMessages(input: PollInboxMessagesRequest, options?: RpcOptions): UnaryCall<PollInboxMessagesRequest, PollInboxMessagesResponse>;
    /**
     * Lists all inbox messages for a recipient.
     *
     * @generated from protobuf rpc: ListInboxMessages(elephant.user.ListInboxMessagesRequest) returns (elephant.user.ListInboxMessagesResponse);
     */
    listInboxMessages(input: ListInboxMessagesRequest, options?: RpcOptions): UnaryCall<ListInboxMessagesRequest, ListInboxMessagesResponse>;
    /**
     * Updates an existing inbox message.
     *
     * @generated from protobuf rpc: UpdateInboxMessage(elephant.user.UpdateInboxMessageRequest) returns (elephant.user.UpdateInboxMessageResponse);
     */
    updateInboxMessage(input: UpdateInboxMessageRequest, options?: RpcOptions): UnaryCall<UpdateInboxMessageRequest, UpdateInboxMessageResponse>;
    /**
     * Deletes an inbox message.
     *
     * @generated from protobuf rpc: DeleteInboxMessage(elephant.user.DeleteInboxMessageRequest) returns (elephant.user.DeleteInboxMessageResponse);
     */
    deleteInboxMessage(input: DeleteInboxMessageRequest, options?: RpcOptions): UnaryCall<DeleteInboxMessageRequest, DeleteInboxMessageResponse>;
}
/**
 * @generated from protobuf service elephant.user.Messages
 */
export class MessagesClient implements IMessagesClient, ServiceInfo {
    typeName = Messages.typeName;
    methods = Messages.methods;
    options = Messages.options;
    constructor(private readonly _transport: RpcTransport) {
    }
    /**
     * Pushes a new message to a recipient.
     *
     * @generated from protobuf rpc: PushMessage(elephant.user.PushMessageRequest) returns (elephant.user.PushMessageResponse);
     */
    pushMessage(input: PushMessageRequest, options?: RpcOptions): UnaryCall<PushMessageRequest, PushMessageResponse> {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return stackIntercept<PushMessageRequest, PushMessageResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * Pushes a new inbox message to a recipient.
     *
     * @generated from protobuf rpc: PushInboxMessage(elephant.user.PushInboxMessageRequest) returns (elephant.user.PushInboxMessageResponse);
     */
    pushInboxMessage(input: PushInboxMessageRequest, options?: RpcOptions): UnaryCall<PushInboxMessageRequest, PushInboxMessageResponse> {
        const method = this.methods[1], opt = this._transport.mergeOptions(options);
        return stackIntercept<PushInboxMessageRequest, PushInboxMessageResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * Polls for new messages for a recipient.
     *
     * @generated from protobuf rpc: PollMessages(elephant.user.PollMessagesRequest) returns (elephant.user.PollMessagesResponse);
     */
    pollMessages(input: PollMessagesRequest, options?: RpcOptions): UnaryCall<PollMessagesRequest, PollMessagesResponse> {
        const method = this.methods[2], opt = this._transport.mergeOptions(options);
        return stackIntercept<PollMessagesRequest, PollMessagesResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * Polls for new inbox messages for a recipient.
     *
     * @generated from protobuf rpc: PollInboxMessages(elephant.user.PollInboxMessagesRequest) returns (elephant.user.PollInboxMessagesResponse);
     */
    pollInboxMessages(input: PollInboxMessagesRequest, options?: RpcOptions): UnaryCall<PollInboxMessagesRequest, PollInboxMessagesResponse> {
        const method = this.methods[3], opt = this._transport.mergeOptions(options);
        return stackIntercept<PollInboxMessagesRequest, PollInboxMessagesResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * Lists all inbox messages for a recipient.
     *
     * @generated from protobuf rpc: ListInboxMessages(elephant.user.ListInboxMessagesRequest) returns (elephant.user.ListInboxMessagesResponse);
     */
    listInboxMessages(input: ListInboxMessagesRequest, options?: RpcOptions): UnaryCall<ListInboxMessagesRequest, ListInboxMessagesResponse> {
        const method = this.methods[4], opt = this._transport.mergeOptions(options);
        return stackIntercept<ListInboxMessagesRequest, ListInboxMessagesResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * Updates an existing inbox message.
     *
     * @generated from protobuf rpc: UpdateInboxMessage(elephant.user.UpdateInboxMessageRequest) returns (elephant.user.UpdateInboxMessageResponse);
     */
    updateInboxMessage(input: UpdateInboxMessageRequest, options?: RpcOptions): UnaryCall<UpdateInboxMessageRequest, UpdateInboxMessageResponse> {
        const method = this.methods[5], opt = this._transport.mergeOptions(options);
        return stackIntercept<UpdateInboxMessageRequest, UpdateInboxMessageResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * Deletes an inbox message.
     *
     * @generated from protobuf rpc: DeleteInboxMessage(elephant.user.DeleteInboxMessageRequest) returns (elephant.user.DeleteInboxMessageResponse);
     */
    deleteInboxMessage(input: DeleteInboxMessageRequest, options?: RpcOptions): UnaryCall<DeleteInboxMessageRequest, DeleteInboxMessageResponse> {
        const method = this.methods[6], opt = this._transport.mergeOptions(options);
        return stackIntercept<DeleteInboxMessageRequest, DeleteInboxMessageResponse>("unary", this._transport, method, opt, input);
    }
}

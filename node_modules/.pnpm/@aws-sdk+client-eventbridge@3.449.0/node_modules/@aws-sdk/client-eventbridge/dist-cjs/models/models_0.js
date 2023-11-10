"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateConnectionRequestFilterSensitiveLog = exports.UpdateConnectionAuthRequestParametersFilterSensitiveLog = exports.UpdateConnectionOAuthRequestParametersFilterSensitiveLog = exports.UpdateConnectionOAuthClientRequestParametersFilterSensitiveLog = exports.UpdateConnectionBasicAuthRequestParametersFilterSensitiveLog = exports.UpdateConnectionApiKeyAuthRequestParametersFilterSensitiveLog = exports.PutTargetsRequestFilterSensitiveLog = exports.ListTargetsByRuleResponseFilterSensitiveLog = exports.TargetFilterSensitiveLog = exports.RedshiftDataParametersFilterSensitiveLog = exports.DescribeConnectionResponseFilterSensitiveLog = exports.ConnectionAuthResponseParametersFilterSensitiveLog = exports.ConnectionOAuthResponseParametersFilterSensitiveLog = exports.CreateConnectionRequestFilterSensitiveLog = exports.CreateConnectionAuthRequestParametersFilterSensitiveLog = exports.CreateConnectionOAuthRequestParametersFilterSensitiveLog = exports.CreateConnectionOAuthClientRequestParametersFilterSensitiveLog = exports.ConnectionHttpParametersFilterSensitiveLog = exports.ConnectionQueryStringParameterFilterSensitiveLog = exports.ConnectionHeaderParameterFilterSensitiveLog = exports.ConnectionBodyParameterFilterSensitiveLog = exports.CreateConnectionBasicAuthRequestParametersFilterSensitiveLog = exports.CreateConnectionApiKeyAuthRequestParametersFilterSensitiveLog = exports.PolicyLengthExceededException = exports.PropagateTags = exports.PlacementStrategyType = exports.PlacementConstraintType = exports.LaunchType = exports.RuleState = exports.EventSourceState = exports.ManagedRuleException = exports.EndpointState = exports.ReplicationState = exports.ConnectionState = exports.ConnectionOAuthHttpMethod = exports.ConnectionAuthorizationType = exports.InvalidEventPatternException = exports.ResourceAlreadyExistsException = exports.LimitExceededException = exports.IllegalStatusException = exports.ReplayState = exports.AssignPublicIp = exports.ArchiveState = exports.ApiDestinationHttpMethod = exports.ApiDestinationState = exports.ResourceNotFoundException = exports.OperationDisabledException = exports.InvalidStateException = exports.InternalException = exports.ConcurrentModificationException = void 0;
const smithy_client_1 = require("@smithy/smithy-client");
const EventBridgeServiceException_1 = require("./EventBridgeServiceException");
class ConcurrentModificationException extends EventBridgeServiceException_1.EventBridgeServiceException {
    constructor(opts) {
        super({
            name: "ConcurrentModificationException",
            $fault: "client",
            ...opts,
        });
        this.name = "ConcurrentModificationException";
        this.$fault = "client";
        Object.setPrototypeOf(this, ConcurrentModificationException.prototype);
    }
}
exports.ConcurrentModificationException = ConcurrentModificationException;
class InternalException extends EventBridgeServiceException_1.EventBridgeServiceException {
    constructor(opts) {
        super({
            name: "InternalException",
            $fault: "server",
            ...opts,
        });
        this.name = "InternalException";
        this.$fault = "server";
        Object.setPrototypeOf(this, InternalException.prototype);
    }
}
exports.InternalException = InternalException;
class InvalidStateException extends EventBridgeServiceException_1.EventBridgeServiceException {
    constructor(opts) {
        super({
            name: "InvalidStateException",
            $fault: "client",
            ...opts,
        });
        this.name = "InvalidStateException";
        this.$fault = "client";
        Object.setPrototypeOf(this, InvalidStateException.prototype);
    }
}
exports.InvalidStateException = InvalidStateException;
class OperationDisabledException extends EventBridgeServiceException_1.EventBridgeServiceException {
    constructor(opts) {
        super({
            name: "OperationDisabledException",
            $fault: "client",
            ...opts,
        });
        this.name = "OperationDisabledException";
        this.$fault = "client";
        Object.setPrototypeOf(this, OperationDisabledException.prototype);
    }
}
exports.OperationDisabledException = OperationDisabledException;
class ResourceNotFoundException extends EventBridgeServiceException_1.EventBridgeServiceException {
    constructor(opts) {
        super({
            name: "ResourceNotFoundException",
            $fault: "client",
            ...opts,
        });
        this.name = "ResourceNotFoundException";
        this.$fault = "client";
        Object.setPrototypeOf(this, ResourceNotFoundException.prototype);
    }
}
exports.ResourceNotFoundException = ResourceNotFoundException;
exports.ApiDestinationState = {
    ACTIVE: "ACTIVE",
    INACTIVE: "INACTIVE",
};
exports.ApiDestinationHttpMethod = {
    DELETE: "DELETE",
    GET: "GET",
    HEAD: "HEAD",
    OPTIONS: "OPTIONS",
    PATCH: "PATCH",
    POST: "POST",
    PUT: "PUT",
};
exports.ArchiveState = {
    CREATE_FAILED: "CREATE_FAILED",
    CREATING: "CREATING",
    DISABLED: "DISABLED",
    ENABLED: "ENABLED",
    UPDATE_FAILED: "UPDATE_FAILED",
    UPDATING: "UPDATING",
};
exports.AssignPublicIp = {
    DISABLED: "DISABLED",
    ENABLED: "ENABLED",
};
exports.ReplayState = {
    CANCELLED: "CANCELLED",
    CANCELLING: "CANCELLING",
    COMPLETED: "COMPLETED",
    FAILED: "FAILED",
    RUNNING: "RUNNING",
    STARTING: "STARTING",
};
class IllegalStatusException extends EventBridgeServiceException_1.EventBridgeServiceException {
    constructor(opts) {
        super({
            name: "IllegalStatusException",
            $fault: "client",
            ...opts,
        });
        this.name = "IllegalStatusException";
        this.$fault = "client";
        Object.setPrototypeOf(this, IllegalStatusException.prototype);
    }
}
exports.IllegalStatusException = IllegalStatusException;
class LimitExceededException extends EventBridgeServiceException_1.EventBridgeServiceException {
    constructor(opts) {
        super({
            name: "LimitExceededException",
            $fault: "client",
            ...opts,
        });
        this.name = "LimitExceededException";
        this.$fault = "client";
        Object.setPrototypeOf(this, LimitExceededException.prototype);
    }
}
exports.LimitExceededException = LimitExceededException;
class ResourceAlreadyExistsException extends EventBridgeServiceException_1.EventBridgeServiceException {
    constructor(opts) {
        super({
            name: "ResourceAlreadyExistsException",
            $fault: "client",
            ...opts,
        });
        this.name = "ResourceAlreadyExistsException";
        this.$fault = "client";
        Object.setPrototypeOf(this, ResourceAlreadyExistsException.prototype);
    }
}
exports.ResourceAlreadyExistsException = ResourceAlreadyExistsException;
class InvalidEventPatternException extends EventBridgeServiceException_1.EventBridgeServiceException {
    constructor(opts) {
        super({
            name: "InvalidEventPatternException",
            $fault: "client",
            ...opts,
        });
        this.name = "InvalidEventPatternException";
        this.$fault = "client";
        Object.setPrototypeOf(this, InvalidEventPatternException.prototype);
    }
}
exports.InvalidEventPatternException = InvalidEventPatternException;
exports.ConnectionAuthorizationType = {
    API_KEY: "API_KEY",
    BASIC: "BASIC",
    OAUTH_CLIENT_CREDENTIALS: "OAUTH_CLIENT_CREDENTIALS",
};
exports.ConnectionOAuthHttpMethod = {
    GET: "GET",
    POST: "POST",
    PUT: "PUT",
};
exports.ConnectionState = {
    AUTHORIZED: "AUTHORIZED",
    AUTHORIZING: "AUTHORIZING",
    CREATING: "CREATING",
    DEAUTHORIZED: "DEAUTHORIZED",
    DEAUTHORIZING: "DEAUTHORIZING",
    DELETING: "DELETING",
    UPDATING: "UPDATING",
};
exports.ReplicationState = {
    DISABLED: "DISABLED",
    ENABLED: "ENABLED",
};
exports.EndpointState = {
    ACTIVE: "ACTIVE",
    CREATE_FAILED: "CREATE_FAILED",
    CREATING: "CREATING",
    DELETE_FAILED: "DELETE_FAILED",
    DELETING: "DELETING",
    UPDATE_FAILED: "UPDATE_FAILED",
    UPDATING: "UPDATING",
};
class ManagedRuleException extends EventBridgeServiceException_1.EventBridgeServiceException {
    constructor(opts) {
        super({
            name: "ManagedRuleException",
            $fault: "client",
            ...opts,
        });
        this.name = "ManagedRuleException";
        this.$fault = "client";
        Object.setPrototypeOf(this, ManagedRuleException.prototype);
    }
}
exports.ManagedRuleException = ManagedRuleException;
exports.EventSourceState = {
    ACTIVE: "ACTIVE",
    DELETED: "DELETED",
    PENDING: "PENDING",
};
exports.RuleState = {
    DISABLED: "DISABLED",
    ENABLED: "ENABLED",
};
exports.LaunchType = {
    EC2: "EC2",
    EXTERNAL: "EXTERNAL",
    FARGATE: "FARGATE",
};
exports.PlacementConstraintType = {
    DISTINCT_INSTANCE: "distinctInstance",
    MEMBER_OF: "memberOf",
};
exports.PlacementStrategyType = {
    BINPACK: "binpack",
    RANDOM: "random",
    SPREAD: "spread",
};
exports.PropagateTags = {
    TASK_DEFINITION: "TASK_DEFINITION",
};
class PolicyLengthExceededException extends EventBridgeServiceException_1.EventBridgeServiceException {
    constructor(opts) {
        super({
            name: "PolicyLengthExceededException",
            $fault: "client",
            ...opts,
        });
        this.name = "PolicyLengthExceededException";
        this.$fault = "client";
        Object.setPrototypeOf(this, PolicyLengthExceededException.prototype);
    }
}
exports.PolicyLengthExceededException = PolicyLengthExceededException;
const CreateConnectionApiKeyAuthRequestParametersFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.ApiKeyValue && { ApiKeyValue: smithy_client_1.SENSITIVE_STRING }),
});
exports.CreateConnectionApiKeyAuthRequestParametersFilterSensitiveLog = CreateConnectionApiKeyAuthRequestParametersFilterSensitiveLog;
const CreateConnectionBasicAuthRequestParametersFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Password && { Password: smithy_client_1.SENSITIVE_STRING }),
});
exports.CreateConnectionBasicAuthRequestParametersFilterSensitiveLog = CreateConnectionBasicAuthRequestParametersFilterSensitiveLog;
const ConnectionBodyParameterFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Value && { Value: smithy_client_1.SENSITIVE_STRING }),
});
exports.ConnectionBodyParameterFilterSensitiveLog = ConnectionBodyParameterFilterSensitiveLog;
const ConnectionHeaderParameterFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Value && { Value: smithy_client_1.SENSITIVE_STRING }),
});
exports.ConnectionHeaderParameterFilterSensitiveLog = ConnectionHeaderParameterFilterSensitiveLog;
const ConnectionQueryStringParameterFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Value && { Value: smithy_client_1.SENSITIVE_STRING }),
});
exports.ConnectionQueryStringParameterFilterSensitiveLog = ConnectionQueryStringParameterFilterSensitiveLog;
const ConnectionHttpParametersFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.HeaderParameters && {
        HeaderParameters: obj.HeaderParameters.map((item) => (0, exports.ConnectionHeaderParameterFilterSensitiveLog)(item)),
    }),
    ...(obj.QueryStringParameters && {
        QueryStringParameters: obj.QueryStringParameters.map((item) => (0, exports.ConnectionQueryStringParameterFilterSensitiveLog)(item)),
    }),
    ...(obj.BodyParameters && {
        BodyParameters: obj.BodyParameters.map((item) => (0, exports.ConnectionBodyParameterFilterSensitiveLog)(item)),
    }),
});
exports.ConnectionHttpParametersFilterSensitiveLog = ConnectionHttpParametersFilterSensitiveLog;
const CreateConnectionOAuthClientRequestParametersFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.ClientSecret && { ClientSecret: smithy_client_1.SENSITIVE_STRING }),
});
exports.CreateConnectionOAuthClientRequestParametersFilterSensitiveLog = CreateConnectionOAuthClientRequestParametersFilterSensitiveLog;
const CreateConnectionOAuthRequestParametersFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.ClientParameters && {
        ClientParameters: (0, exports.CreateConnectionOAuthClientRequestParametersFilterSensitiveLog)(obj.ClientParameters),
    }),
    ...(obj.OAuthHttpParameters && {
        OAuthHttpParameters: (0, exports.ConnectionHttpParametersFilterSensitiveLog)(obj.OAuthHttpParameters),
    }),
});
exports.CreateConnectionOAuthRequestParametersFilterSensitiveLog = CreateConnectionOAuthRequestParametersFilterSensitiveLog;
const CreateConnectionAuthRequestParametersFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.BasicAuthParameters && {
        BasicAuthParameters: (0, exports.CreateConnectionBasicAuthRequestParametersFilterSensitiveLog)(obj.BasicAuthParameters),
    }),
    ...(obj.OAuthParameters && {
        OAuthParameters: (0, exports.CreateConnectionOAuthRequestParametersFilterSensitiveLog)(obj.OAuthParameters),
    }),
    ...(obj.ApiKeyAuthParameters && {
        ApiKeyAuthParameters: (0, exports.CreateConnectionApiKeyAuthRequestParametersFilterSensitiveLog)(obj.ApiKeyAuthParameters),
    }),
    ...(obj.InvocationHttpParameters && {
        InvocationHttpParameters: (0, exports.ConnectionHttpParametersFilterSensitiveLog)(obj.InvocationHttpParameters),
    }),
});
exports.CreateConnectionAuthRequestParametersFilterSensitiveLog = CreateConnectionAuthRequestParametersFilterSensitiveLog;
const CreateConnectionRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.AuthParameters && {
        AuthParameters: (0, exports.CreateConnectionAuthRequestParametersFilterSensitiveLog)(obj.AuthParameters),
    }),
});
exports.CreateConnectionRequestFilterSensitiveLog = CreateConnectionRequestFilterSensitiveLog;
const ConnectionOAuthResponseParametersFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.OAuthHttpParameters && {
        OAuthHttpParameters: (0, exports.ConnectionHttpParametersFilterSensitiveLog)(obj.OAuthHttpParameters),
    }),
});
exports.ConnectionOAuthResponseParametersFilterSensitiveLog = ConnectionOAuthResponseParametersFilterSensitiveLog;
const ConnectionAuthResponseParametersFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.OAuthParameters && {
        OAuthParameters: (0, exports.ConnectionOAuthResponseParametersFilterSensitiveLog)(obj.OAuthParameters),
    }),
    ...(obj.InvocationHttpParameters && {
        InvocationHttpParameters: (0, exports.ConnectionHttpParametersFilterSensitiveLog)(obj.InvocationHttpParameters),
    }),
});
exports.ConnectionAuthResponseParametersFilterSensitiveLog = ConnectionAuthResponseParametersFilterSensitiveLog;
const DescribeConnectionResponseFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.AuthParameters && { AuthParameters: (0, exports.ConnectionAuthResponseParametersFilterSensitiveLog)(obj.AuthParameters) }),
});
exports.DescribeConnectionResponseFilterSensitiveLog = DescribeConnectionResponseFilterSensitiveLog;
const RedshiftDataParametersFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Sql && { Sql: smithy_client_1.SENSITIVE_STRING }),
    ...(obj.Sqls && { Sqls: smithy_client_1.SENSITIVE_STRING }),
});
exports.RedshiftDataParametersFilterSensitiveLog = RedshiftDataParametersFilterSensitiveLog;
const TargetFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.RedshiftDataParameters && {
        RedshiftDataParameters: (0, exports.RedshiftDataParametersFilterSensitiveLog)(obj.RedshiftDataParameters),
    }),
});
exports.TargetFilterSensitiveLog = TargetFilterSensitiveLog;
const ListTargetsByRuleResponseFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Targets && { Targets: obj.Targets.map((item) => (0, exports.TargetFilterSensitiveLog)(item)) }),
});
exports.ListTargetsByRuleResponseFilterSensitiveLog = ListTargetsByRuleResponseFilterSensitiveLog;
const PutTargetsRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Targets && { Targets: obj.Targets.map((item) => (0, exports.TargetFilterSensitiveLog)(item)) }),
});
exports.PutTargetsRequestFilterSensitiveLog = PutTargetsRequestFilterSensitiveLog;
const UpdateConnectionApiKeyAuthRequestParametersFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.ApiKeyValue && { ApiKeyValue: smithy_client_1.SENSITIVE_STRING }),
});
exports.UpdateConnectionApiKeyAuthRequestParametersFilterSensitiveLog = UpdateConnectionApiKeyAuthRequestParametersFilterSensitiveLog;
const UpdateConnectionBasicAuthRequestParametersFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Password && { Password: smithy_client_1.SENSITIVE_STRING }),
});
exports.UpdateConnectionBasicAuthRequestParametersFilterSensitiveLog = UpdateConnectionBasicAuthRequestParametersFilterSensitiveLog;
const UpdateConnectionOAuthClientRequestParametersFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.ClientSecret && { ClientSecret: smithy_client_1.SENSITIVE_STRING }),
});
exports.UpdateConnectionOAuthClientRequestParametersFilterSensitiveLog = UpdateConnectionOAuthClientRequestParametersFilterSensitiveLog;
const UpdateConnectionOAuthRequestParametersFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.ClientParameters && {
        ClientParameters: (0, exports.UpdateConnectionOAuthClientRequestParametersFilterSensitiveLog)(obj.ClientParameters),
    }),
    ...(obj.OAuthHttpParameters && {
        OAuthHttpParameters: (0, exports.ConnectionHttpParametersFilterSensitiveLog)(obj.OAuthHttpParameters),
    }),
});
exports.UpdateConnectionOAuthRequestParametersFilterSensitiveLog = UpdateConnectionOAuthRequestParametersFilterSensitiveLog;
const UpdateConnectionAuthRequestParametersFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.BasicAuthParameters && {
        BasicAuthParameters: (0, exports.UpdateConnectionBasicAuthRequestParametersFilterSensitiveLog)(obj.BasicAuthParameters),
    }),
    ...(obj.OAuthParameters && {
        OAuthParameters: (0, exports.UpdateConnectionOAuthRequestParametersFilterSensitiveLog)(obj.OAuthParameters),
    }),
    ...(obj.ApiKeyAuthParameters && {
        ApiKeyAuthParameters: (0, exports.UpdateConnectionApiKeyAuthRequestParametersFilterSensitiveLog)(obj.ApiKeyAuthParameters),
    }),
    ...(obj.InvocationHttpParameters && {
        InvocationHttpParameters: (0, exports.ConnectionHttpParametersFilterSensitiveLog)(obj.InvocationHttpParameters),
    }),
});
exports.UpdateConnectionAuthRequestParametersFilterSensitiveLog = UpdateConnectionAuthRequestParametersFilterSensitiveLog;
const UpdateConnectionRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.AuthParameters && {
        AuthParameters: (0, exports.UpdateConnectionAuthRequestParametersFilterSensitiveLog)(obj.AuthParameters),
    }),
});
exports.UpdateConnectionRequestFilterSensitiveLog = UpdateConnectionRequestFilterSensitiveLog;

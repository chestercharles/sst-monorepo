"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ECSServiceException = exports.__ServiceException = void 0;
const smithy_client_1 = require("@smithy/smithy-client");
Object.defineProperty(exports, "__ServiceException", { enumerable: true, get: function () { return smithy_client_1.ServiceException; } });
class ECSServiceException extends smithy_client_1.ServiceException {
    constructor(options) {
        super(options);
        Object.setPrototypeOf(this, ECSServiceException.prototype);
    }
}
exports.ECSServiceException = ECSServiceException;

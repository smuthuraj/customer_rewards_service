"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateEmailResponse = void 0;
const graphql_1 = require("@nestjs/graphql");
let UpdateEmailResponse = class UpdateEmailResponse {
};
exports.UpdateEmailResponse = UpdateEmailResponse;
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], UpdateEmailResponse.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], UpdateEmailResponse.prototype, "guid", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], UpdateEmailResponse.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)((type) => RESPONSE_STATUS),
    __metadata("design:type", typeof (_a = typeof RESPONSE_STATUS !== "undefined" && RESPONSE_STATUS) === "function" ? _a : Object)
], UpdateEmailResponse.prototype, "status", void 0);
exports.UpdateEmailResponse = UpdateEmailResponse = __decorate([
    (0, graphql_1.ObjectType)()
], UpdateEmailResponse);
//# sourceMappingURL=customer.reward.update.js.map
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const apollo_1 = require("@nestjs/apollo");
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const app_controller_1 = require("./app.controller");
const app_resolver_1 = require("./app.resolver");
const app_service_1 = require("./app.service");
const customer_rewards_service_gql_1 = require("./customer-rewards/customer-rewards-service.gql");
const customer_rewards_module_1 = require("./customer-rewards/customer-rewards.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [customer_rewards_module_1.CustomerRewardsModule,
            graphql_1.GraphQLModule.forRoot({
                playground: true,
                driver: apollo_1.ApolloDriver,
                autoSchemaFile: 'schema.gql',
            }),
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService, app_resolver_1.CustomerRewardsResolver, customer_rewards_service_gql_1.CustomerRewardsServiceGQL],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map
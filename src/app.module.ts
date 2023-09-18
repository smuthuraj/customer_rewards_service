import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { DirectiveLocation, GraphQLDirective } from 'graphql';
import { AppController } from './app.controller';
import { CustomerRewardsResolver } from './app.resolver';
import { AppService } from './app.service';
import { CustomerRewardsServiceGQL } from './customer-rewards/customer-rewards-service.gql';
import { CustomerRewardsModule } from './customer-rewards/customer-rewards.module';

@Module({
  imports: [CustomerRewardsModule,
    GraphQLModule.forRoot({
      playground: true,
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql',
    }),
  ],
  controllers: [AppController],
  providers: [AppService, CustomerRewardsResolver, CustomerRewardsServiceGQL],
})
export class AppModule {}



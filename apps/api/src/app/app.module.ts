import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { GqlModule } from "@nx-gannt-starterkit/gql";
import { AuthModule } from "@nx-gannt-starterkit/auth";

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal: true}), // make sure it's imported before modules reading env variables
    GqlModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}

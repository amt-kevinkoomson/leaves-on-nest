import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import config from 'src/config/envConfig';
import { LeavePolicyModule } from './leave-policy/leave-policy.module';
import { LeavePolicyResolver } from './leave-policy/leave-policy.resolver';
import { LeavePolicyService } from './leave-policy/leave-policy.service';

@Module({
  imports: [
    LeavePolicyModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [config],
    }),
  ],
  providers: [LeavePolicyService, LeavePolicyResolver],
})
export class AppModule {}

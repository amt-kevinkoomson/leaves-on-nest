import { Args, Query, Resolver } from '@nestjs/graphql';
import { LeavePolicyService } from './leave-policy.service';

@Resolver('LeavePolicy')
export class LeavePolicyResolver {
  constructor(private leavePolicyService: LeavePolicyService) {}

  @Query('getLeavePolicy')
  async getLeavePolicy(@Args('id') id: number) {
    return this.leavePolicyService.getLeavePolicy(id);
  }

  @Query('listLeavePolicies')
  async listLeavePolicies() {
    return await this.leavePolicyService.getPolicies();
  }
}

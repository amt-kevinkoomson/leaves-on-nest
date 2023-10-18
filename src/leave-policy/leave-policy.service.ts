import { Injectable } from '@nestjs/common';
import { prisma } from '../config/prismaConfig';

@Injectable()
export class LeavePolicyService {
  async getLeavePolicy(id: number) {
    return await prisma.leave_policy.findFirst({
      where: {
        id: id,
      },
    });
  }
  async getPolicies() {
    return await prisma.leave_policy.findMany();
  }
}

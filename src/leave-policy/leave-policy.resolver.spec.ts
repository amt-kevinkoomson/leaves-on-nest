import { Test, TestingModule } from '@nestjs/testing';
import { LeavePolicyResolver } from './leave-policy.resolver';

describe('LeavePolicyResolver', () => {
  let resolver: LeavePolicyResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LeavePolicyResolver],
    }).compile();

    resolver = module.get<LeavePolicyResolver>(LeavePolicyResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});

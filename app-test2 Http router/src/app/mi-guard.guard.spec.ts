import { TestBed } from '@angular/core/testing';

import { MiGuardGuard } from './mi-guard.guard';

describe('MiGuardGuard', () => {
  let guard: MiGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(MiGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

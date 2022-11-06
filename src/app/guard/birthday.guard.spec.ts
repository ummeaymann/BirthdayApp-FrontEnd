import { TestBed } from '@angular/core/testing';

import { BirthdayGuard } from './birthday.guard';

describe('BirthdayGuard', () => {
  let guard: BirthdayGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(BirthdayGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

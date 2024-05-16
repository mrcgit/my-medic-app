import { TestBed } from '@angular/core/testing';

import { PressureParamService } from './pressure-param.service';

describe('PressureParamService', () => {
  let service: PressureParamService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PressureParamService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

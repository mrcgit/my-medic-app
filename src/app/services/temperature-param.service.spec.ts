import { TestBed } from '@angular/core/testing';

import { TemperatureParamService } from './temperature-param.service';

describe('TemperatureParamService', () => {
  let service: TemperatureParamService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TemperatureParamService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

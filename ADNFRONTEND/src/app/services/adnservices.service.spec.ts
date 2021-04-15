import { TestBed } from '@angular/core/testing';

import { ADNServicesService } from './adnservices.service';

describe('ADNServicesService', () => {
  let service: ADNServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ADNServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

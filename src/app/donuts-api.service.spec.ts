import { TestBed } from '@angular/core/testing';

import { DonutsApiService } from './donuts-api.service';

describe('DonutsApiService', () => {
  let service: DonutsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DonutsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

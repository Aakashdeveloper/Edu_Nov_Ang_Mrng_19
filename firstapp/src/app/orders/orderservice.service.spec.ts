import { TestBed } from '@angular/core/testing';

import { OrderserviceService } from './orderservice.service';

describe('OrderserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OrderserviceService = TestBed.get(OrderserviceService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { OrderpipeService } from './orderpipe.service';

describe('OrderpipeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OrderpipeService = TestBed.get(OrderpipeService);
    expect(service).toBeTruthy();
  });
});

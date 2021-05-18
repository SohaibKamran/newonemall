import { TestBed } from '@angular/core/testing';

import { SellerCSVService } from './seller-csv.service';

describe('SellerCSVService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SellerCSVService = TestBed.get(SellerCSVService);
    expect(service).toBeTruthy();
  });
});

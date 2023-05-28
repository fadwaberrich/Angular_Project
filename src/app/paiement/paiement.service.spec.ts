import { TestBed } from '@angular/core/testing';

import { PaiementService } from './paiement.service';

describe('PaiementService', () => {
  let service: PaiementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaiementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

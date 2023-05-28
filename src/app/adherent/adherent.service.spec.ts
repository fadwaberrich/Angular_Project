/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AdherentService } from './adherent.service';

describe('Service: Adherent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdherentService]
    });
  });

  it('should ...', inject([AdherentService], (service: AdherentService) => {
    expect(service).toBeTruthy();
  }));
});

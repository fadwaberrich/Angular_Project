/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { EnseignantService } from './enseignant.service';

describe('Service: Enseignant', () => {
  let service: EnseignantService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      
      //providers: [EnseignantService]
    });
    service = TestBed.inject(EnseignantService);
  });



    it('should be created', (/* //inject([EnseignantService], (service: EnseignantService) */ ) => {
      expect(service).toBeTruthy();
    });
    });
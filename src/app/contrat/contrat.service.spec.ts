/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ContratService } from './contrat.service';

describe('Service: Contrat', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContratService]
    });
  });

  it('should ...', inject([ContratService], (service: ContratService) => {
    expect(service).toBeTruthy();
  }));
});

/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DetailEquipeService } from './detailEquipe.service';

describe('Service: DetailEquipe', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DetailEquipeService]
    });
  });

  it('should ...', inject([DetailEquipeService], (service: DetailEquipeService) => {
    expect(service).toBeTruthy();
  }));
});

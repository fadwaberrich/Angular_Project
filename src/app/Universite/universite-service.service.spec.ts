/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UniversiteServiceService } from './universite-service.service';

describe('Service: UniversiteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UniversiteServiceService]
    });
  });

  it('should ...', inject([UniversiteServiceService], (service: UniversiteServiceService) => {
    expect(service).toBeTruthy();
  }));
});

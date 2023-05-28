/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CoursService } from './cours.service';

describe('Service: Cours', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CoursService]
    });
  });

  it('should ...', inject([CoursService], (service: CoursService) => {
    expect(service).toBeTruthy();
  }));
});

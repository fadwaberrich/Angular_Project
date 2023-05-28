/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ClubService } from './club.service';

describe('Service: Club', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClubService]
    });
  });

  it('should ...', inject([ClubService], (service: ClubService) => {
    expect(service).toBeTruthy();
  }));
});

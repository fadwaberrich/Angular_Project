/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ContratListComponent } from './contrat-list.component';

describe('ContratListComponent', () => {
  let component: ContratListComponent;
  let fixture: ComponentFixture<ContratListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContratListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContratListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

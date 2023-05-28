import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContratDeleteComponent } from './contrat-delete.component';

describe('ContratDeleteComponent', () => {
  let component: ContratDeleteComponent;
  let fixture: ComponentFixture<ContratDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContratDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContratDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

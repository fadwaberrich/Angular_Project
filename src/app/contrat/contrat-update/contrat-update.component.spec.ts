import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContratUpdateComponent } from './contrat-update.component';

describe('ContratUpdateComponent', () => {
  let component: ContratUpdateComponent;
  let fixture: ComponentFixture<ContratUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContratUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContratUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnseignantUpdateComponent } from './enseignant-update.component';

describe('EnseignantUpdateComponent', () => {
  let component: EnseignantUpdateComponent;
  let fixture: ComponentFixture<EnseignantUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnseignantUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnseignantUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

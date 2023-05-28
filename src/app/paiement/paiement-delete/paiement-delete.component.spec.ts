import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaiementDeleteComponent } from './paiement-delete.component';

describe('PaiementDeleteComponent', () => {
  let component: PaiementDeleteComponent;
  let fixture: ComponentFixture<PaiementDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaiementDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaiementDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

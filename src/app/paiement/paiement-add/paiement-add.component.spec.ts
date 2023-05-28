import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaiementAddComponent } from './paiement-add.component';

describe('PaiementAddComponent', () => {
  let component: PaiementAddComponent;
  let fixture: ComponentFixture<PaiementAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaiementAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaiementAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

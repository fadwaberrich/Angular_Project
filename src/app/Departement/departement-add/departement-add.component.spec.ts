import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartementAddComponent } from './departement-add.component';

describe('DepartementAddComponent', () => {
  let component: DepartementAddComponent;
  let fixture: ComponentFixture<DepartementAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartementAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartementAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

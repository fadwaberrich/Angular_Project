import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipeAddComponent } from './equipe-add.component';

describe('EquipeAddComponent', () => {
  let component: EquipeAddComponent;
  let fixture: ComponentFixture<EquipeAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EquipeAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipeAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

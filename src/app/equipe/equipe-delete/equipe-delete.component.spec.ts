import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipeDeleteComponent } from './equipe-delete.component';

describe('EquipeDeleteComponent', () => {
  let component: EquipeDeleteComponent;
  let fixture: ComponentFixture<EquipeDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EquipeDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipeDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

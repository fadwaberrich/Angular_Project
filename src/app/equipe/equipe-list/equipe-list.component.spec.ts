import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipeListComponent } from './equipe-list.component';

describe('EquipeListComponent', () => {
  let component: EquipeListComponent;
  let fixture: ComponentFixture<EquipeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EquipeListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

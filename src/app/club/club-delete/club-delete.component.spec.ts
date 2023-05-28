import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubDeleteComponent } from './club-delete.component';

describe('ClubDeleteComponent', () => {
  let component: ClubDeleteComponent;
  let fixture: ComponentFixture<ClubDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClubDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClubDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

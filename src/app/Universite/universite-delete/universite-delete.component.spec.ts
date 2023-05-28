import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversiteDeleteComponent } from './universite-delete.component';

describe('UniversiteDeleteComponent', () => {
  let component: UniversiteDeleteComponent;
  let fixture: ComponentFixture<UniversiteDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniversiteDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversiteDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

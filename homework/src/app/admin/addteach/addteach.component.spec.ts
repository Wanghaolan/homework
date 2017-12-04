import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddteachComponent } from './addteach.component';

describe('AddteachComponent', () => {
  let component: AddteachComponent;
  let fixture: ComponentFixture<AddteachComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddteachComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddteachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

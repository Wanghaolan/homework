import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteacherComponent } from './deleteacher.component';

describe('DeleteacherComponent', () => {
  let component: DeleteacherComponent;
  let fixture: ComponentFixture<DeleteacherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteacherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

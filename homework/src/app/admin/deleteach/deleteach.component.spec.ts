import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteachComponent } from './deleteach.component';

describe('DeleteachComponent', () => {
  let component: DeleteachComponent;
  let fixture: ComponentFixture<DeleteachComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteachComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

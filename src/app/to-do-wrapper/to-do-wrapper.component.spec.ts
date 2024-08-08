import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoWrapperComponent } from './to-do-wrapper.component';

describe('ToDoWrapperComponent', () => {
  let component: ToDoWrapperComponent;
  let fixture: ComponentFixture<ToDoWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToDoWrapperComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToDoWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

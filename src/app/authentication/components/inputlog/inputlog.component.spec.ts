import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputlogComponent } from './inputlog.component';

describe('InputlogComponent', () => {
  let component: InputlogComponent;
  let fixture: ComponentFixture<InputlogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputlogComponent]
    });
    fixture = TestBed.createComponent(InputlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

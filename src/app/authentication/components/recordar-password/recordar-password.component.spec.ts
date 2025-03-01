import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordarPasswordComponent } from './recordar-password.component';

describe('RecordarPasswordComponent', () => {
  let component: RecordarPasswordComponent;
  let fixture: ComponentFixture<RecordarPasswordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecordarPasswordComponent]
    });
    fixture = TestBed.createComponent(RecordarPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

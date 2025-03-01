import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FbGoogleLogComponent } from './fb-google-log.component';

describe('FbGoogleLogComponent', () => {
  let component: FbGoogleLogComponent;
  let fixture: ComponentFixture<FbGoogleLogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FbGoogleLogComponent]
    });
    fixture = TestBed.createComponent(FbGoogleLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

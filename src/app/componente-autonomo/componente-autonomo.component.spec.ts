import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteAutonomoComponent } from './componente-autonomo.component';

describe('ComponenteAutonomoComponent', () => {
  let component: ComponenteAutonomoComponent;
  let fixture: ComponentFixture<ComponenteAutonomoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ComponenteAutonomoComponent]
    });
    fixture = TestBed.createComponent(ComponenteAutonomoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

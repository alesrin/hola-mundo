import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteAutonomoDosComponent } from './componente-autonomo-dos.component';

describe('ComponenteAutonomoDosComponent', () => {
  let component: ComponenteAutonomoDosComponent;
  let fixture: ComponentFixture<ComponenteAutonomoDosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ComponenteAutonomoDosComponent]
    });
    fixture = TestBed.createComponent(ComponenteAutonomoDosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

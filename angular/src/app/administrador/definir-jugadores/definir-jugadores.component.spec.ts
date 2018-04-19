import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefinirJugadoresComponent } from './definir-jugadores.component';

describe('DefinirJugadoresComponent', () => {
  let component: DefinirJugadoresComponent;
  let fixture: ComponentFixture<DefinirJugadoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefinirJugadoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefinirJugadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

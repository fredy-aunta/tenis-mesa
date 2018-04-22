import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsociarJugadoresComponent } from './asociar-jugadores.component';

describe('AsociarJugadoresComponent', () => {
  let component: AsociarJugadoresComponent;
  let fixture: ComponentFixture<AsociarJugadoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsociarJugadoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsociarJugadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

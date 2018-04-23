import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarPartidosComponent } from './consultar-partidos.component';

describe('ConsultarPartidosComponent', () => {
  let component: ConsultarPartidosComponent;
  let fixture: ComponentFixture<ConsultarPartidosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultarPartidosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarPartidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

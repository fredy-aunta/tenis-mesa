import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarPartidoComponent } from './consultar-partido.component';

describe('ConsultarPartidoComponent', () => {
  let component: ConsultarPartidoComponent;
  let fixture: ComponentFixture<ConsultarPartidoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultarPartidoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarPartidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarTorneoComponent } from './consultar-torneo.component';

describe('ConsultarTorneoComponent', () => {
  let component: ConsultarTorneoComponent;
  let fixture: ComponentFixture<ConsultarTorneoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultarTorneoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarTorneoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

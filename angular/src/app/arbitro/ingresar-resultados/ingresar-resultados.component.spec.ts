import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresarResultadosComponent } from './ingresar-resultados.component';

describe('IngresarResultadosComponent', () => {
  let component: IngresarResultadosComponent;
  let fixture: ComponentFixture<IngresarResultadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngresarResultadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngresarResultadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

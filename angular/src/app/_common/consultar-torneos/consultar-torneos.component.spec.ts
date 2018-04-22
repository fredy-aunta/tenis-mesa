import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarTorneosComponent } from './consultar-torneos.component';

describe('ConsultarTorneosComponent', () => {
  let component: ConsultarTorneosComponent;
  let fixture: ComponentFixture<ConsultarTorneosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultarTorneosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarTorneosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

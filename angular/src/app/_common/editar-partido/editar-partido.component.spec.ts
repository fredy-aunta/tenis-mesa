import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarPartidoComponent } from './editar-partido.component';

describe('EditarPartidoComponent', () => {
  let component: EditarPartidoComponent;
  let fixture: ComponentFixture<EditarPartidoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarPartidoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarPartidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

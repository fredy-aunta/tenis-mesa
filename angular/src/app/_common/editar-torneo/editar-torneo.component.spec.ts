import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarTorneoComponent } from './editar-torneo.component';

describe('EditarTorneoComponent', () => {
  let component: EditarTorneoComponent;
  let fixture: ComponentFixture<EditarTorneoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarTorneoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarTorneoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

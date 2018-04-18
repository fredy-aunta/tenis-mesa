import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthenticationRouterOutletComponent } from './authentication-router-outlet.component';

describe('AuthenticationRouterOutletComponent', () => {
  let component: AuthenticationRouterOutletComponent;
  let fixture: ComponentFixture<AuthenticationRouterOutletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthenticationRouterOutletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthenticationRouterOutletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

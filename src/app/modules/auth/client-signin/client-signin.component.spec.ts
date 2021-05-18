import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientSigninComponent } from './client-signin.component';

describe('ClientSigninComponent', () => {
  let component: ClientSigninComponent;
  let fixture: ComponentFixture<ClientSigninComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientSigninComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientSigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

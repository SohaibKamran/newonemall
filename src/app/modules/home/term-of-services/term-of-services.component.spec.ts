import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TermOfServicesComponent } from './term-of-services.component';

describe('TermOfServicesComponent', () => {
  let component: TermOfServicesComponent;
  let fixture: ComponentFixture<TermOfServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TermOfServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TermOfServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

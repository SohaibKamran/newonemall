import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPendingSellersComponent } from './admin-pending-sellers.component';

describe('AdminPendingSellersComponent', () => {
  let component: AdminPendingSellersComponent;
  let fixture: ComponentFixture<AdminPendingSellersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPendingSellersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPendingSellersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

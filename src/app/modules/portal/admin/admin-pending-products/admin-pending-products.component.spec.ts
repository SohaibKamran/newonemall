import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPendingProductsComponent } from './admin-pending-products.component';

describe('AdminPendingProductsComponent', () => {
  let component: AdminPendingProductsComponent;
  let fixture: ComponentFixture<AdminPendingProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPendingProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPendingProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

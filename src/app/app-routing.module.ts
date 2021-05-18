import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomePageComponent} from './core/pages/home-page/home-page.component';
import {SellerDashboardComponent} from './modules/portal/seller/seller-dashboard/seller-dashboard.component';
import {ProductFormComponent} from './modules/portal/product-form/product-form.component';
import {SellerProductsComponent} from './modules/portal/seller/seller-products/seller-products.component';
import {SellerOrdersComponent} from './modules/portal/seller/seller-orders/seller-orders.component';
import {SellerSignupComponent} from './modules/auth/seller-signup/seller-signup.component';
import {SellerSigninComponent} from './modules/auth/seller-signin/seller-signin.component';
import {SellerMessagesComponent} from './modules/portal/seller/seller-messages/seller-messages.component';
import {ErrorPageComponent} from './core/pages/error-page/error-page.component';
import {PortalPageComponent} from './core/pages/portal-page/portal-page.component';
import {CategoryPageComponent} from './modules/home/category-page/category-page.component';
import {ProductPageComponent} from './modules/home/product-page/product-page.component';
import {ShopPageComponent} from './modules/home/shop-page/shop-page.component';
import {CartPageComponent} from './modules/home/cart-page/cart-page.component';
import {ClientSigninComponent} from './modules/auth/client-signin/client-signin.component';
import {ClientSignupComponent} from './modules/auth/client-signup/client-signup.component';
import {LandingPageComponent} from './modules/home/landing-page/landing-page.component';
import {StorePageComponent} from './modules/home/store-page/store-page.component';
import {BecomeSellerComponent} from './modules/home/become-seller/become-seller.component';
import {AdminDashboardComponent} from './modules/portal/admin/admin-dashboard/admin-dashboard.component';
import {TermOfServicesComponent} from './modules/home/term-of-services/term-of-services.component';
import {CategoryFormComponent} from './modules/portal/category-form/category-form.component';
import {AdminCategoriesComponent} from './modules/portal/admin/admin-categories/admin-categories.component';
import {AdminPendingSellersComponent} from './modules/portal/admin/admin-pending-sellers/admin-pending-sellers.component';
import {AdminPendingProductsComponent} from './modules/portal/admin/admin-pending-products/admin-pending-products.component';
import {ContactUsComponent} from './modules/home/contact-us/contact-us.component';
import { SellerReviewsComponent } from './modules/portal/seller/seller-reviews/seller-reviews.component';
import { CheckoutComponent } from './modules/home/checkout/checkout.component';
import { UserOrdersComponent } from './modules/home/user-orders/user-orders.component';
import { OrderDetailComponent } from './modules/portal/seller/order-detail/order-detail.component';
import { UserOrderDetailComponent } from './modules/home/user-order-detail/user-order-detail.component';


const routes: Routes = [
  {
    path: "manage",
    children: [
      {
        path: "login",
        component: SellerSigninComponent,
      },
      {
        path: "register",
        component: SellerSignupComponent,
      },
      {
        path: "",
        component: PortalPageComponent,
        children: [
          {
            path: "seller",
            children: [
              {
                path: "dashboard",
                component: SellerDashboardComponent,
              },
              {
                path: "product",
                children: [
                  {
                    path: "add",
                    component: ProductFormComponent,
                  },
                  {
                    path: "edit/:id",
                    component: ProductFormComponent,
                  },
                  {
                    path: "",
                    component: SellerProductsComponent,
                  },
                ],
              },
              {
                path: "orders",
                children:[
                  {
                    path: "orderDetail/:order",
                    component: OrderDetailComponent,
                  },
                  {
                    path:"",
                    component: SellerOrdersComponent,
                  }
                ]
              },
              {
                path: "reviews",
                component: SellerReviewsComponent,
              },
              {
                path: "messages",
                component: SellerMessagesComponent,
              },
              {
                path: "",
                pathMatch: "full",
                redirectTo: "dashboard",
              },
            ],
          },
          {
            path: "admin",
            children: [
              {
                path: "dashboard",
                component: AdminDashboardComponent,
              },
              {
                path: "pending",
                children: [
                  {
                    path: "sellers",
                    component: AdminPendingSellersComponent,
                  },
                  {
                    path: "products",
                    component: AdminPendingProductsComponent,
                  },
                ],
              },
              {
                path: "product",
                children: [
                  {
                    path: "add",
                    component: ProductFormComponent,
                  },
                  {
                    path: "edit/:id",
                    component: ProductFormComponent,
                  },
                  {
                    path: "",
                    component: SellerProductsComponent,
                  },
                ],
              },
              {
                path: "categories",
                children: [
                  {
                    path: "add",
                    component: CategoryFormComponent,
                  },
                  {
                    path: "edit/:id",
                    component: CategoryFormComponent,
                  },
                  {
                    path: "",
                    component: AdminCategoriesComponent,
                  },
                ],
              },
              {
                path: "orders",
                component: SellerOrdersComponent,
              },
              {
                path: "messages",
                component: SellerMessagesComponent,
              },
              {
                path: "",
                pathMatch: "full",
                redirectTo: "dashboard",
              },
            ],
          },
          {
            path: "**",
            pathMatch: "full",
            redirectTo: "/manage/login",
          },
        ],
      },
    ],
  },
  {
    path: "login",
    component: ClientSigninComponent,
  },
  {
    path: "signup",
    component: ClientSignupComponent,
  },
  {
    path: "contact-us",
    component: ContactUsComponent,
  },
  {
    path: "",
    component: HomePageComponent,
    children: [
      {
        path: "category/:id",
        component: CategoryPageComponent,
      },
      {
        path: "product/:id",
        component: ProductPageComponent,
      },
      {
        path: "store/:id",
        component: StorePageComponent,
      },
      {
        path: "cart",
        component: CartPageComponent,
      },
      {
        path: "userOrders",
        component: UserOrdersComponent,
      },
      {
        path:"user-order-detail/:order",
        component:UserOrderDetailComponent,
      },
      {
        path: "checkout",
        component: CheckoutComponent,
      },
      {
        path: "affiliation-program",
        component: BecomeSellerComponent,
      },
      {
        path: "terms-and-conditions",
        component: TermOfServicesComponent,
      },
      {
        path: "",
        component: LandingPageComponent,
      },
    ],
  },
  {
    path: "error404",
    component: ErrorPageComponent,
  },
  {
    path: "**",
    pathMatch: "full",
    redirectTo: "error404",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorComponent } from './core/components/error/error.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { HeaderComponent } from './core/components/header/header.component';
import { LoadingComponent } from './core/components/loading/loading.component';
import { SidenavComponent } from './core/components/sidenav/sidenav.component';
import { TopnavComponent } from './core/components/topnav/topnav.component';
import { AuthPageComponent } from './core/pages/auth-page/auth-page.component';
import { ErrorPageComponent } from './core/pages/error-page/error-page.component';
import { HomePageComponent } from './core/pages/home-page/home-page.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { DashboardComponent } from './modules/portal/dashboard/dashboard.component';
import { SellerDashboardComponent } from './modules/portal/seller/seller-dashboard/seller-dashboard.component';
import { AdminDashboardComponent } from './modules/portal/admin/admin-dashboard/admin-dashboard.component';
import { ProductFormComponent } from './modules/portal/product-form/product-form.component';
import { SellerProductsComponent } from './modules/portal/seller/seller-products/seller-products.component';
import { SellerOrdersComponent } from './modules/portal/seller/seller-orders/seller-orders.component';
import { SellerSigninComponent } from './modules/auth/seller-signin/seller-signin.component';
import { SellerSignupComponent } from './modules/auth/seller-signup/seller-signup.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { SellerMessagesComponent } from './modules/portal/seller/seller-messages/seller-messages.component';
import { PortalPageComponent } from './core/pages/portal-page/portal-page.component';
import { CategoryCardComponent } from './shared/components/category-card/category-card.component';
import { ProductCardComponent } from './shared/components/product-card/product-card.component';
import { SellerCardComponent } from './shared/components/seller-card/seller-card.component';
import { LandingPageComponent } from './modules/home/landing-page/landing-page.component';
import { ProductPageComponent } from './modules/home/product-page/product-page.component';
import { ShopPageComponent } from './modules/home/shop-page/shop-page.component';
import { CartPageComponent } from './modules/home/cart-page/cart-page.component';
import { ClientLoginComponent } from './modules/auth/client-login/client-login.component';
import { ClientSigninComponent } from './modules/auth/client-signin/client-signin.component';
import { ClientSignupComponent } from './modules/auth/client-signup/client-signup.component';
import {CategoryPageComponent} from './modules/home/category-page/category-page.component';
import { StorePageComponent } from './modules/home/store-page/store-page.component';
import { TermOfServicesComponent } from './modules/home/term-of-services/term-of-services.component';
import { BecomeSellerComponent } from './modules/home/become-seller/become-seller.component';
import { CategoryFormComponent } from './modules/portal/category-form/category-form.component';
import { AdminCategoriesComponent } from './modules/portal/admin/admin-categories/admin-categories.component';
import { AdminPendingSellersComponent } from './modules/portal/admin/admin-pending-sellers/admin-pending-sellers.component';
import { AdminPendingProductsComponent } from './modules/portal/admin/admin-pending-products/admin-pending-products.component';
import { ContactUsComponent } from './modules/home/contact-us/contact-us.component';
import { SellerReviewsComponent } from './modules/portal/seller/seller-reviews/seller-reviews.component';
import { CheckoutComponent } from './modules/home/checkout/checkout.component';
import { UserOrdersComponent } from './modules/home/user-orders/user-orders.component';
import { OrderDetailComponent } from './modules/portal/seller/order-detail/order-detail.component';
import { UserOrderDetailComponent } from './modules/home/user-order-detail/user-order-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    FooterComponent,
    HeaderComponent,
    LoadingComponent,
    SidenavComponent,
    TopnavComponent,
    AuthPageComponent,
    ErrorPageComponent,
    HomePageComponent,
    NavbarComponent,
    DashboardComponent,
    SellerDashboardComponent,
    AdminDashboardComponent,
    ProductFormComponent,
    SellerProductsComponent,
    SellerOrdersComponent,
    SellerSigninComponent,
    SellerSignupComponent,
    SellerMessagesComponent,
    PortalPageComponent,
    CategoryCardComponent,
    ProductCardComponent,
    SellerCardComponent,
    LandingPageComponent,
    ProductPageComponent,
    CategoryPageComponent,
    ShopPageComponent,
    CartPageComponent,
    ClientLoginComponent,
    ClientSigninComponent,
    ClientSignupComponent,
    StorePageComponent,
    TermOfServicesComponent,
    BecomeSellerComponent,
    CategoryFormComponent,
    AdminCategoriesComponent,
    AdminPendingSellersComponent,
    AdminPendingProductsComponent,
    ContactUsComponent,
    SellerReviewsComponent,
    CheckoutComponent,
    UserOrdersComponent,
    OrderDetailComponent,
    UserOrderDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

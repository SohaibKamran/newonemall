import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Navbar} from '../../models/navbar.model';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  navbar: Navbar[] = [];
  navbarToggled = false;

  constructor( ) {
    if (sessionStorage.getItem('jwt')) {
      if (sessionStorage.getItem('role') === 'seller') {
        this.getSellerNav();
      } else if (sessionStorage.getItem('role') === 'admin') {
        this.getAdminNav();
      }
    }
  }

  ngOnInit() {

  }

  getSellerNav() {
    this.navbar = [
      {
        divider: true,
        items: [
          {
            title: "Dashboard",
            path: "/manage/seller/dashboard",
            icon: "fas fa-tachometer-alt",
          },
        ],
      },
      {
        divider: true,
        // title: 'Products',
        items: [
          {
            title: "Products",
            path: "/manage/seller/product",
            icon: "fa fa-camera-retro",
          },
        ],
      },
      {
        divider: true,
        // title: 'Orders',
        items: [
          {
            title: "Orders",
            path: "/manage/seller/orders",
            icon: "fas fa-shopping-cart",
          },
        ],
      },
      {
        divider: true,
        // title: 'Orders',
        items: [
          {
            title: "Reviews",
            path: "/manage/seller/reviews",
            icon: "fas fa-star",
          },
        ],
      },
      {
        divider: true,
        // title: 'Products',
        items: [
          {
            title: "Messages",
            path: "/manage/seller/messages",
            icon: "fas fa-comments",
          },
        ],
      },
    ];
  }

  getAdminNav() {
    this.navbar = [
      {
        divider: true,
        items: [
          {
            title: 'Dashboard',
            path: '/manage/admin/dashboard',
            icon: 'fas fa-tachometer-alt',
          }
        ]
      },
      {
        divider: true,
        items: [
          {
            title: 'Categories',
            path: '/manage/admin/categories',
            icon: 'fas fa-columns',
          }
        ]
      },
      {
        divider: true,
        items: [
          {
            title: 'Approve',
            path: '/manage/admin/pending',
            icon: 'fas fa-check-square',
            children: {
              title: '',
              items: [
                {
                  title: 'Seller',
                  path: '/manage/admin/pending/sellers',
                },
                {
                  title: 'Product',
                  path: '/manage/admin/pending/products',
                }
              ]
            }
          }
        ]
      },
      {
        divider: true,
        // title: 'Products',
        items: [
          {
            title: 'Products',
            path: '/manage/admin/product',
            icon: 'fas fa-th-list',
          }
        ]
      },
      {
        divider: true,
        // title: 'Orders',
        items: [
          {
            title: 'Orders',
            path: '/manage/admin/orders',
            icon: 'fas fa-shopping-cart',
          }
        ]
      },
      {
        divider: true,
        // title: 'Products',
        items: [
          {
            title: 'Messages',
            path: '/manage/admin/messages',
            icon: 'fas fa-comments',
          }
        ]
      },
    ];
  }

  toggleSidebar() {
    this.navbarToggled = !this.navbarToggled;
  }
}

import {Component, OnInit, ViewChild} from '@angular/core';
import {SidenavComponent} from '../../components/sidenav/sidenav.component';
import {AuthService} from '../../services/auth/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-portal-page',
  templateUrl: './portal-page.component.html',
  styleUrls: ['./portal-page.component.scss']
})
export class PortalPageComponent implements OnInit {

  isLoading = 0;
  @ViewChild(SidenavComponent, {static: false}) sidenavComponent: SidenavComponent;

  constructor(
    public authService: AuthService,
    private router: Router
  ) {
    this.isLoading = 0;
    if (!sessionStorage.getItem('jwt')) {
      this.router.navigate(['manage/seller/login']);
    }
  }

  ngOnInit() {
  }

  logout() {
    sessionStorage.removeItem('jwt');
    sessionStorage.removeItem('role');
    this.router.navigate(['manage/seller/login']);
  }

  sideBarToggle($event: any) {
    this.sidenavComponent.toggleSidebar();
  }

}

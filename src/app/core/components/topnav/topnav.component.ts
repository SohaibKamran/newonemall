import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.scss']
})
export class TopnavComponent implements OnInit {

  @Output() toggleSideBar: EventEmitter<any> = new EventEmitter();
  name = sessionStorage.getItem('name');
  role = sessionStorage.getItem('role');

  constructor() { }

  ngOnInit() {
  }

  toggleSidebar() {
    this.toggleSideBar.emit();
  }

}

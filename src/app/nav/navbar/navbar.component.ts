import { Component, Injectable, OnInit } from '@angular/core';
import { SidebarService } from  '../sidenav/sidenav/sidebar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
@Injectable()
export class NavbarComponent implements OnInit {

  navService: SidebarService;
  constructor(navService:SidebarService) {
  this.navService= navService;

  }
  ngOnInit(): void {
  }

  openClose(){
    return this.navService.opened = !this.navService.opened ;
  }

}

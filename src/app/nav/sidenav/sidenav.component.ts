import { Component, ElementRef, OnInit } from '@angular/core';
import { SidebarService } from '../sidenav/sidenav/sidebar.service';
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})

export class SidenavComponent {

  opened: false;
  navService: SidebarService;
  constructor(navService: SidebarService) {
  this.navService = navService;

 }


  ngOnInit(): void {
  }

  openClose(){
    this.navService.opened = !this.navService.opened;
  }


}

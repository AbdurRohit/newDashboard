import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Company',  icon: 'pe-7s-graph', class: '' },
    { path: '/user', title: 'Machines',  icon:'pe-7s-user', class: '' },
    { path: '/table', title: 'Production',  icon:'pe-7s-note2', class: '' },
    { path: '/typography', title: 'Reports',  icon:'pe-7s-news-paper', class: '' },
    { path: '/icons', title: 'Dashboard',  icon:'pe-7s-science', class: '' },
    { path: '/maps', title: 'Automation',  icon:'pe-7s-map-marker', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}

import {Component, OnInit} from "@angular/core";
import {HeaderConfig} from "../../../../layout/src/lib/components";
import {MdDashboardContainerService} from "../../../../layout/src/lib/services";
import {LinkSection} from "../../../../layout/src/lib/models/left-menu/nav-link/md.nav-link.model";

const NAV_MENU: LinkSection[] = [
  {
    label: "Home", icon: "home", link: "/home"
  },
  {
    label: "Analytics", icon: "bar_chart", link: "/p/analytics"
  },
  {
    label: "Finance", icon: "paid", link: "/p/finance"
  },
  {
    label: "Management", icon: "add_circle", link: "/p/ma", links: [
      {
        label: "Business", icon: "storefront", subLinks: [
          { label: 'List', link: '/p/ma/home-2' },
          { label: 'Create', link: '/p/ma/home-2' },
          { label: 'Details', link: '/p/ma/business/d' },
          { label: 'Edit', link: '/p/ma/business/e' },
        ]
      },
      {
        label: "Partners", icon: "handshake", link: "", subLinks: [
          { label: 'List', link: '/p/ma/home-3' },
          { label: 'Details', link: '/p/ma/partners/d' },
          { label: 'Edit', link: '/p/ma/partners/e' },
        ]
      },
      {
        label: "Products", icon: "inventory", link: "/p/ma/products"
      },
      {
        label: "Orders", icon: "format_list_numbered", link: "/p/ma/orders"
      }
    ]
  }
];

const TOP_MENU: HeaderConfig = {
  icon: "account_circle",
  logoutUrl: "/logout",
  user: {
    email: "lfernando2091@gmail.com",
    user_name: "LFernando"
  },
  menu: [
    { title: 'Profile', icon: 'account_circle', link: '' },
    { title: 'Setting', icon: 'settings', link: '', disabled: true },
    { title: 'Switch Account', icon: 'sync_alt', link: '/p/switch-accounts' }
  ]
}

@Component({
  selector: 'app-pages',
  template: `
    <md-dashboard-layout [headerConfig]="headerConfig">
      <md-one-column class="space">
        <h1>Home</h1>
        <router-outlet></router-outlet>
      </md-one-column>
      <div footer>
        <h4>Footer</h4>
      </div>
    </md-dashboard-layout>
  `,
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit{
  menu: LinkSection[] = NAV_MENU;
  headerConfig = TOP_MENU;

  constructor(
    private dashboard: MdDashboardContainerService
  ) {
  }

  ngOnInit() {
    // this.dashboard.setNavigation(false);
    setTimeout(() => {
      this.dashboard.setSections$(this.menu);
    }, 3000);
  }
}

import {Component, OnInit} from "@angular/core";
import {HeaderConfig} from "../../../../layout/src/lib/components";
import {MdDashboardContainerService} from "../../../../layout/src/lib/services";
import {Account, LinkSection} from "../../../../layout/src/lib/models";

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

const ACCOUNTS: Account[] = [
  { id: "0", name: "Account 1" },
  { id: "1", name: "Account 2" },
  { id: "2", name: "Account 3" },
  { id: "3", name: "Account 4" },
  { id: "4", name: "Account 5" }
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
    <md-dashboard-layout>
      <md-one-column class="space">
        <h1>Home</h1>
        <button (click)="cancelNav()">Cancel Navigation</button>
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

  cancelNav() {
    this.dashboard.setNavigation$(false);
  }

  ngOnInit() {
    setTimeout(() => {
      this.dashboard.setSections$(this.menu);
      this.dashboard.setAccount$(ACCOUNTS[2]);
      this.dashboard.setAccounts$(ACCOUNTS);
      if (TOP_MENU.menu) {
        this.dashboard.setHeaderMenu$(TOP_MENU.menu);
      }
      if (TOP_MENU.user) {
        this.dashboard.setUser$(TOP_MENU.user);
      }
    }, 3000);
  }
}

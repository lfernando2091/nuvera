import {Component} from "@angular/core";
import {LinkSection} from "../../../../layout/src/lib/components";

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

@Component({
  selector: 'app-pages',
  template: `
    <md-dashboard-layout [sections]="menu">
      <md-one-column class="space">
        <router-outlet></router-outlet>
      </md-one-column>
    </md-dashboard-layout>
  `,
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent {
  menu: LinkSection[] = NAV_MENU;
}

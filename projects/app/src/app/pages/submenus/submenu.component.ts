import {Component, OnInit} from "@angular/core";

@Component({
  selector: 'app-submenu',
  template: `
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./submenu.component.scss']
})
export class SubmenuComponent implements OnInit{
  ngOnInit(): void {
  }

}

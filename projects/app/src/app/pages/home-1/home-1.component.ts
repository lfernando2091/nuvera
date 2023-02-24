import {Component} from "@angular/core";
import {MdDashboardContainerService} from "../../../../../layout/src/lib/services";

@Component({
  selector: 'app-home-1',
  template: `
    <h1>Home 1</h1>
    <button (click)="cancelNav()">Close</button>
  `,
  styleUrls: ['./home-1.component.scss']
})
export class Home1Component {
  navi = true;

  constructor(
    private dashboard: MdDashboardContainerService
  ) {
  }

  cancelNav() {
    this.navi = !this.navi;
    this.dashboard.setNavigation$(this.navi);
  }
}

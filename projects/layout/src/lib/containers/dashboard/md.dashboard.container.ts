import {Component, Input, ViewChild} from "@angular/core";
import {MatDrawer} from "@angular/material/sidenav";
import {LinkSection} from "../../components";

@Component({
  selector: 'md-dashboard-container',
  template: `
    <mat-drawer-container autosize="false">
      <mat-drawer mode="over" >
        <md-nav-link [sections]="sections"></md-nav-link>
      </mat-drawer>
      <div class="sidenav-content">
        <ng-content select="md-header"></ng-content>
        <ng-content select="md-body"></ng-content>
      </div>
    </mat-drawer-container>
  `,
  styleUrls: ["./md.dashboard.container.scss"]
})
export class MdDashboardContainer {
  @ViewChild(MatDrawer)
  public drawer: MatDrawer | null = null;

  @Input()
  sections?: LinkSection[];
}

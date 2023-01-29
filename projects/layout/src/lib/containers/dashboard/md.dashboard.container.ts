import {Component, ViewChild} from "@angular/core";
import {MatDrawer} from "@angular/material/sidenav";

@Component({
  selector: 'md-dashboard-container',
  template: `
    <mat-drawer-container>
      <mat-drawer mode="over">
        <p>Auto-resizing sidenav</p>
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
}

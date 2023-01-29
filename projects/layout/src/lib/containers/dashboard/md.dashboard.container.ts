import {Component} from "@angular/core";

@Component({
  selector: 'md-dashboard-container',
  template: `
    <mat-drawer-container>
      <mat-drawer #drawer mode="over">
        <p>Auto-resizing sidenav</p>
      </mat-drawer>

      <div class="sidenav-content">
        <button type="button" mat-button (click)="drawer.toggle()">
          Toggle sidenav
        </button>
      </div>

    </mat-drawer-container>
  `,
  styleUrls: ["./md.dashboard.container.scss"]
})
export class MdDashboardContainer {

}

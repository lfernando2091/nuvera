import {ChangeDetectionStrategy, Component, OnInit} from "@angular/core";
import {MdDashboardBreakpointsService, MdDashboardContainerService} from "../../services";
import {ScreenView} from "../../models";

@Component({
  selector: 'md-dashboard-container',
  template: `
    <ng-container *ngIf="
    {
        screen: screen$ | async,
        sections: sections$ | async,
        navigation: navigation$ | async,
        drawer: drawer$ | async
    } as observables">
      <mat-drawer-container autosize>
        <mat-drawer
          *ngIf="observables.navigation"
          [mode]="observables.screen === screenTypes.Small || observables.screen === screenTypes.Normal ? 'over': 'side'"
          [opened]="observables.drawer"
          [class.radius]="observables.screen !== screenTypes.Big"
          (closed)="closedDrawer()">
          <md-nav-link
            *ngIf="observables.sections; else loadingDrawer"
            [sections]="observables.sections"></md-nav-link>
          <ng-template #loadingDrawer>
            <mat-progress-bar mode="indeterminate"></mat-progress-bar>
          </ng-template>
        </mat-drawer>
        <md-rail-menu *ngIf="observables.navigation && observables.sections"
                      [class.open]="observables.screen === screenTypes.Normal" [sections]="observables.sections">
          <md-toggle-button topButton>
            <mat-icon first>sync_alt</mat-icon>
            <mat-icon second>home</mat-icon>
          </md-toggle-button>
          <md-toggle-button bottomButton>
            <mat-icon first>sync_alt</mat-icon>
            <mat-icon second>home</mat-icon>
          </md-toggle-button>
        </md-rail-menu>
        <div class="sidenav-content">
          <ng-content select="md-header"></ng-content>
          <ng-content select="md-body"></ng-content>
        </div>
      </mat-drawer-container>
    </ng-container>
  `,
  styleUrls: ["./md.dashboard.container.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MdDashboardContainer implements OnInit{
  screenTypes = ScreenView;

  sections$ = this.dashboardContainerService.getSections$();
  screen$ = this.breakpoint.getScreen$();
  navigation$ = this.dashboardContainerService.getNavigation$();
  drawer$ = this.breakpoint.getDrawer$();

  constructor(
    private dashboardContainerService: MdDashboardContainerService,
    private breakpoint: MdDashboardBreakpointsService
  ) {
  }

  closedDrawer() {
    this.breakpoint.setDrawer(false);
  }

  ngOnInit() {
  }
}

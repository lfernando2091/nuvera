import {ChangeDetectionStrategy, Component, OnInit} from "@angular/core";
import {MdDashboardBreakpointsService, MdDashboardContainerService} from "../../services";
import {ScreenView} from "../../models";
import {MdDrawerService} from "../../services/dashboard/md.drawer.service";

@Component({
  selector: 'md-dashboard-container',
  template: `
    <ng-container *ngIf="
    {
        screen: screen$ | async,
        sections: sections$ | async,
        navigation: navigation$ | async,
        drawer: drawer$ | async,
        openDrawer: openDrawer$ | async
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
        <main class="md-body-view">
          <ng-content select="md-header"></ng-content>
          <div class="sidenav-content">
            <ng-content select="md-body"></ng-content>
          </div>
<!--          <mat-drawer-container autosize>-->
<!--            <mat-drawer position="end" mode="side" [opened]="observables.openDrawer">-->
<!--              <h1>Content 1234567890</h1>-->
<!--            </mat-drawer>-->
<!--          </mat-drawer-container>-->
        </main>
        <md-drawer
          class="dismissible"
        [class.open]="observables.openDrawer">
        </md-drawer>
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
  openDrawer$ = this.mdDrawer.getOpen$();

  constructor(
    private dashboardContainerService: MdDashboardContainerService,
    private breakpoint: MdDashboardBreakpointsService,
    private mdDrawer: MdDrawerService
  ) {
  }

  closedDrawer() {
    this.breakpoint.setDrawer(false);
  }

  ngOnInit() {
  }
}

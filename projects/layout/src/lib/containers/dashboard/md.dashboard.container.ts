import {ChangeDetectionStrategy, Component, OnInit} from "@angular/core";
import {MdDashboardBreakpointsService, MdDashboardContainerService} from "../../services";
import {ScreenView} from "../../models";
import {MdDrawerService} from "../../services";

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
      <mat-sidenav-container autosize>
        <mat-sidenav
          *ngIf="observables.navigation"
          [mode]="observables.screen === screenTypes.Small || observables.screen === screenTypes.Normal ? 'over': 'side'"
          [opened]="observables.drawer"
          [class.radius]="observables.screen !== screenTypes.Big"
          (closed)="closedDrawer()"
            class="main-nav">
          <md-nav-link
            *ngIf="observables.sections; else loadingDrawer"
            [sections]="observables.sections"></md-nav-link>
          <ng-template #loadingDrawer>
            <mat-progress-bar mode="indeterminate"></mat-progress-bar>
          </ng-template>
        </mat-sidenav>
        <mat-sidenav [opened]="observables.openDrawer"
                     [mode]="observables.screen !== screenTypes.Small ? 'side': 'over'"
                     (closed)="closedRightDrawer()"
                     [class.radius]="observables.screen !== screenTypes.Big"
                     position="end">
          <div class="side-nav-title">
            <button mat-icon-button aria-label="Close Menu" (click)="closedRightDrawer()">
              <mat-icon>close</mat-icon>
            </button>
            <h3>Title Menu</h3>
          </div>
          <md-drawer></md-drawer>
        </mat-sidenav>
        <mat-sidenav-content>
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
          </main>
        </mat-sidenav-content>
      </mat-sidenav-container>
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
  openDrawer$ = this.mdDrawer.open$();

  constructor(
    private dashboardContainerService: MdDashboardContainerService,
    private breakpoint: MdDashboardBreakpointsService,
    private mdDrawer: MdDrawerService
  ) {
  }

  closedDrawer() {
    this.breakpoint.setDrawer(false);
  }

  closedRightDrawer() {
    this.mdDrawer.close();
  }

  ngOnInit() {
  }
}

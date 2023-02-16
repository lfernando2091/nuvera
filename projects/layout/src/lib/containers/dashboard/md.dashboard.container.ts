import {ChangeDetectionStrategy, Component, OnInit} from "@angular/core";
import {MdDashboardBreakpointsService, MdDashboardContainerService, MdDrawerService} from "../../services";
import {ScreenView} from "../../models";
import {MdDrawerControllerService} from "../../services/dashboard/md.drawer-controller.service";

@Component({
  selector: 'md-dashboard-container',
  template: `
    <ng-container *ngIf="
    {
        screen: screen$ | async,
        sections: sections$ | async,
        navigation: navigation$ | async,
        drawer: drawer$ | async,
        openDrawer: openDrawer$ | async,
        titleDrawer: titleDrawer$ | async
    } as observables">
      <mat-drawer-container autosize>
        <mat-drawer
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
        </mat-drawer>

        <mat-drawer-content>
          <section class="main-section">
            <md-rail-menu *ngIf="observables.navigation && observables.sections"
                          [class.open]="observables.screen === screenTypes.Normal" [sections]="observables.sections">
            <!--<md-toggle-button topButton>
                <mat-icon first>sync_alt</mat-icon>
                <mat-icon second>home</mat-icon>
              </md-toggle-button>
              <md-toggle-button bottomButton>
                <mat-icon first>sync_alt</mat-icon>
                <mat-icon second>home</mat-icon>
              </md-toggle-button>
            -->
              <button *ngIf="observables.navigation"
                      (click)="onOpenDrawer()" mat-icon-button aria-label="Open Menu" topButton>
                <mat-icon>menu</mat-icon>
              </button>
            </md-rail-menu>

            <main class="md-scroll-content">
              <div class="md-body-view">
                <ng-content select="md-header"></ng-content>
                <div class="sidenav-content">
                  <ng-content select="md-body"></ng-content>
                </div>
              </div>
            </main>
            <mat-drawer [opened]="observables.openDrawer"
                        [mode]="observables.screen !== screenTypes.Small ? 'side': 'over'"
                        (closed)="closedRightDrawer()"
                        [class.radius]="observables.screen === screenTypes.Small"
                        position="end">
              <div *ngIf="observables.titleDrawer" class="side-nav-title">
                <button mat-icon-button aria-label="Close Menu" (click)="closedRightDrawer()">
                  <mat-icon>close</mat-icon>
                </button>
                <h3>{{ observables.titleDrawer }}</h3>
              </div>
              <md-drawer></md-drawer>
            </mat-drawer>

          </section>
        </mat-drawer-content>
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
  openDrawer$ = this.controller.ready$();
  titleDrawer$ = this.controller.title$()

  constructor(
    private dashboardContainerService: MdDashboardContainerService,
    private breakpoint: MdDashboardBreakpointsService,
    private controller: MdDrawerControllerService,
    private mdDrawer: MdDrawerService
  ) {
  }

  closedDrawer() {
    this.breakpoint.setDrawer(false);
  }

  closedRightDrawer() {
    this.mdDrawer.close();
  }

  onOpenDrawer() {
    this.breakpoint.setDrawerToggle();
  }

  ngOnInit() {
  }
}

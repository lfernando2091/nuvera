import {ChangeDetectionStrategy, Component, OnInit, ViewChild} from "@angular/core";
import {MatDrawer} from "@angular/material/sidenav";
import {MdDashboardBreakpointsService, MdDashboardContainerService} from "../../services";
import {ScreenView} from "../../models";

@Component({
  selector: 'md-dashboard-container',
  template: `
    <ng-container *ngIf="
    {
        screen: screen$ | async,
        sections: sections$ | async,
        navigation: navigation$ | async
    } as observables">
      <mat-drawer-container autosize>
        <mat-drawer
          *ngIf="observables.navigation"
          [mode]="observables.screen === screenTypes.Small || observables.screen === screenTypes.Normal ? 'over': 'side'"
          [opened]="allowOpen(observables.screen)"
          [class.radius]="observables.screen !== screenTypes.Big">
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
  @ViewChild(MatDrawer)
  drawer: MatDrawer | null = null;
  screenTypes = ScreenView;

  sections$ = this.dashboardContainerService.getSections$();
  screen$ = this.breakpoint.getScreen$();
  navigation$ = this.dashboardContainerService.getNavigation$();
  _allowOpen = false;

  constructor(
    private dashboardContainerService: MdDashboardContainerService,
    private breakpoint: MdDashboardBreakpointsService
  ) {
  }

  allowOpen(screen: ScreenView) {
    if (screen === ScreenView.Big) {
      this._allowOpen = true;
      return true;
    }
    return this._allowOpen;
  }

  ngOnInit() {
    this.dashboardContainerService.drawer$.subscribe(() => {
      this._allowOpen = !this._allowOpen;
    });
  }
}

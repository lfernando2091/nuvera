import {ChangeDetectionStrategy, Component, Input} from "@angular/core";
import {
  MdDashboardBreakpointsService,
  MdDashboardContainerService,
  MdDashboardLayoutService
} from "../../services";
import {ScreenView} from "../../models";

@Component({
  selector: 'md-dashboard-layout',
  template: `
    <ng-container *ngIf="{
        screen: screen$ | async,
        navigation: navigation$ | async,
        loading: loading$ | async
    } as observables">
      <mat-progress-bar *ngIf="observables.loading" color="accent" mode="indeterminate"></mat-progress-bar>
      <md-dashboard-container>
        <md-header role="heading" class="single-row">
          <ng-container *ngIf="observables.navigation">
            <button *ngIf="observables.screen === screenTypes.Small"
                    (click)="onOpenDrawer()" mat-icon-button aria-label="Open Menu">
              <mat-icon>menu</mat-icon>
            </button>
          </ng-container>
          <span>{{ title }}</span>
          <span class="toolbar-spacer"></span>
          <md-top-menu [icon]="icon" [logoutUrl]="logoutUrl"></md-top-menu>
        </md-header>
        <md-body>
          <ng-content></ng-content>
          <md-footer>
            <ng-content select="[footer]"></ng-content>
          </md-footer>
        </md-body>
      </md-dashboard-container>
    </ng-container>
  `,
  styleUrls: ["./md.dashboard.layout.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MdDashboardLayout {
  @Input()
  title = "App Title";
  @Input()
  icon = "account_circle";
  @Input()
  logoutUrl = "/logout";

  navigation$ = this.dashboardContainerService.getNavigation$();
  loading$ = this.layoutService.loading$();
  screen$ = this.breakpoint.getScreen$();
  screenTypes = ScreenView;

  constructor(
    private dashboardContainerService: MdDashboardContainerService,
    private layoutService: MdDashboardLayoutService,
    private breakpoint: MdDashboardBreakpointsService
  ) {
  }

  async onOpenDrawer() {
    this.breakpoint.setDrawerToggle();
  }
}

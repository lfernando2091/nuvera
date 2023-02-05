import {ChangeDetectionStrategy, Component, Input, ViewChild} from "@angular/core";
import {MdDashboardContainer} from "../../containers";
import {HeaderConfig} from "../../components";
import {MdDashboardBreakpointsService, MdDashboardContainerService} from "../../services";
import {ScreenView} from "../../models";

@Component({
  selector: 'md-dashboard-layout',
  template: `
    <ng-container *ngIf="{
        screen: screen$ | async,
        navigation: navigation$ | async
    } as observables">
      <md-dashboard-container>
        <md-header role="heading" class="single-row">
          <button *ngIf="observables.screen !== screenTypes.Big && observables.navigation"
                  (click)="onOpenDrawer()" mat-icon-button aria-label="Open Menu">
            <mat-icon>menu</mat-icon>
          </button>
          <span>{{ title }}</span>
          <span class="toolbar-spacer"></span>
          <md-top-menu></md-top-menu>
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
  navigation$ = this.dashboardContainerService.getNavigation$();
  screen$ = this.breakpoint.getScreen$();
  screenTypes = ScreenView;

  constructor(
    private dashboardContainerService: MdDashboardContainerService,
    private breakpoint: MdDashboardBreakpointsService
  ) {
  }

  async onOpenDrawer() {
    this.breakpoint.setDrawerToggle();
  }
}

import {Component, Input, ViewChild} from "@angular/core";
import {MatDrawer, MatDrawerMode} from "@angular/material/sidenav";
import {LinkSection} from "../../components";
import {BreakpointObserver} from "@angular/cdk/layout";
import {MdDashboardContainerService} from "./md.dashboard.container.service";

export enum ScreenView {
  Small,
  Normal,
  Big,
}

@Component({
  selector: 'md-dashboard-container',
  template: `
    <mat-drawer-container autosize>
      <mat-drawer *ngIf="navigation" [mode]="drawerMode" [opened]="drawerOpened" [class.radius]="!drawerOpened">
        <md-nav-link [sections]="sections"></md-nav-link>
      </mat-drawer>
      <md-rail-menu *ngIf="navigation" [class.open]="showRailMenu" [sections]="sections">
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
  `,
  styleUrls: ["./md.dashboard.container.scss"]
})
export class MdDashboardContainer {
  @ViewChild(MatDrawer)
  public drawer: MatDrawer | null = null;

  @Input()
  sections?: LinkSection[];

  @Input()
  navigation = true;

  drawerMode: MatDrawerMode = "over";
  drawerOpened = false;
  showRailMenu = false;

  smallWidth = '(max-width: 959.98px)';
  normalWidth = '(min-width: 960px) and (max-width: 1534.98px)';
  bigWidth = '(min-width: 1535px)';

  constructor(
    private breakpointObserver: BreakpointObserver,
    private dashboardContainerService: MdDashboardContainerService
  ) {
    breakpointObserver.observe([
      this.smallWidth,
      this.normalWidth,
      this.bigWidth
    ])
      .subscribe(result => {
      if (result.matches) {
        if (result.breakpoints[this.smallWidth]
          || result.breakpoints[this.normalWidth]) {
          this.drawerOpened = false;
          this.drawerMode = "over";
        }

        if (result.breakpoints[this.smallWidth]) {
          this.dashboardContainerService.screen$ = ScreenView.Small;
        } else if (result.breakpoints[this.normalWidth]) {
          this.dashboardContainerService.screen$ = ScreenView.Normal;
        } else if (result.breakpoints[this.bigWidth]) {
          this.dashboardContainerService.screen$ = ScreenView.Big;
          this.drawerMode = "side";
          this.drawerOpened = true;
        }
        this.showRailMenu = this.dashboardContainerService.screen === ScreenView.Normal;
      }
    });
  }
}

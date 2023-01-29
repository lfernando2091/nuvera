import {Component, Input, ViewChild} from "@angular/core";
import {MdDashboardContainer, MdDashboardContainerService, ScreenView} from "../../containers";
import {LinkSection} from "../../components";

@Component({
  selector: 'md-dashboard-layout',
  template: `
    <md-dashboard-container [sections]="sections">
      <md-header role="heading" class="single-row">
        <button *ngIf="allowOpenMenu" (click)="onOpenDrawer()" mat-icon-button aria-label="Open Menu">
          <mat-icon>menu</mat-icon>
        </button>
        <span>{{ title }}</span>
        <span class="toolbar-spacer"></span>
        <md-top-menu></md-top-menu>
      </md-header>
      <md-body>
        <ng-content></ng-content>
        <md-footer>
          <h4>Footer</h4>
        </md-footer>
      </md-body>
    </md-dashboard-container>
  `,
  styleUrls: ["./md.dashboard.layout.scss"]
})
export class MdDashboardLayout {
  @Input()
  title = "App Title";

  @Input()
  sections?: LinkSection[];

  @ViewChild(MdDashboardContainer)
  public dashboard: MdDashboardContainer | null = null;

  allowOpenMenu = this.dashboardContainerService.screen !== ScreenView.Big;

  constructor(
    private dashboardContainerService: MdDashboardContainerService
  ) {
    this.dashboardContainerService.eventScreen$.subscribe((res) => {
      this.allowOpenMenu = res !== ScreenView.Big;
    })
  }

  async onOpenDrawer() {
    if(this.dashboard) {
      if(this.dashboard.drawer) {
       await this.dashboard.drawer.open();
      }
    }
  }
}

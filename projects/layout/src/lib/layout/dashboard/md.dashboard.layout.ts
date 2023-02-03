import {Component, Input, ViewChild} from "@angular/core";
import {MdDashboardContainer} from "../../containers";
import {HeaderConfig, LinkSection} from "../../components";
import {MdDashboardContainerService} from "../../services";
import {ScreenView} from "../../models";

@Component({
  selector: 'md-dashboard-layout',
  template: `
    <md-dashboard-container [sections]="sections" [navigation]="navigation">
      <md-header role="heading" class="single-row">
        <button *ngIf="allowOpenMenu && navigation" (click)="onOpenDrawer()" mat-icon-button aria-label="Open Menu">
          <mat-icon>menu</mat-icon>
        </button>
        <span>{{ title }}</span>
        <span class="toolbar-spacer"></span>
        <md-top-menu
          *ngIf="headerConfig"
          [headerConfig]="headerConfig"
        ></md-top-menu>
      </md-header>
      <md-body>
        <ng-content></ng-content>
        <md-footer>
          <ng-content select="[footer]"></ng-content>
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

  @Input()
  headerConfig?: HeaderConfig;

  @Input()
  navigation = true;

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

import {ChangeDetectionStrategy, Component, Input} from "@angular/core";
import {MdDashboardContainerService} from "../../services";

@Component({
  selector: 'md-top-menu',
  template: `
    <button mat-icon-button [matMenuTriggerFor]="menuHeader" aria-label="Menu Icon">
      <mat-icon>{{ icon }}</mat-icon>
    </button>
    <mat-menu class="md-context-menu-content" #menuHeader>
      <div *ngIf="user$ | async as user" class="md-profile">
        <div class=".mat-h4">{{ user.user_name }}</div>
        <div class=".mat-h4">{{ user.email }}</div>
      </div>
      <mat-divider></mat-divider>
      <ng-container *ngIf="headerMenu$ | async as headerMenu">
        <div *ngFor="let item of headerMenu">
          <a *ngIf="!item.disabled" [routerLink]="item.link" class="hide-underline">
            <button mat-menu-item>
              <mat-icon class="md-primary-color">{{ item.icon }}</mat-icon>
              <span class="md-primary-color">{{ item.title }}</span>
            </button>
          </a>
          <button *ngIf="item.disabled" mat-menu-item disabled>
            <mat-icon>{{ item.icon }}</mat-icon>
            <span>{{ item.title }}</span>
          </button>
        </div>
        <mat-divider></mat-divider>
      </ng-container>
      <a [routerLink]="logoutUrl" class="hide-underline">
        <button mat-menu-item>
          <mat-icon class="md-primary-color">logout</mat-icon>
          <span class="md-primary-color">Logout</span>
        </button>
      </a>
    </mat-menu>
  `,
  styleUrls: ["./md.top-menu.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MdTopMenuComponent {
  @Input()
  icon = "account_circle";

  @Input()
  logoutUrl = "/logout";

  headerMenu$ = this.dashboardContainerService.getHeaderMenu$();
  user$ = this.dashboardContainerService.getUser$();

  constructor(
    private dashboardContainerService: MdDashboardContainerService
  ) {
  }
}

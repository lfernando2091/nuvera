import {Component, Input} from "@angular/core";
import {HeaderConfig} from "./md.top-menu.model";

@Component({
  selector: 'md-top-menu',
  template: `
    <button mat-icon-button [matMenuTriggerFor]="menuHeader" aria-label="Menu Icon">
      <mat-icon>{{ headerConfig.icon }}</mat-icon>
    </button>
    <mat-menu class="md-context-menu-content" #menuHeader>
      <div *ngIf="headerConfig.user" class="md-profile">
        <div class=".mat-h4">{{ headerConfig.user.user_name }}</div>
        <div class=".mat-h4">{{ headerConfig.user.email }}</div>
      </div>
      <mat-divider></mat-divider>
      <div *ngFor="let item of headerConfig.menu">
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
      <a [routerLink]="headerConfig.logoutUrl" class="hide-underline">
        <button mat-menu-item>
          <mat-icon class="md-primary-color">logout</mat-icon>
          <span class="md-primary-color">Logout</span>
        </button>
      </a>
    </mat-menu>
  `,
  styleUrls: ["./md.top-menu.component.scss"]
})
export class MdTopMenuComponent {
  @Input()
  headerConfig: HeaderConfig = {
    icon: "account_circle",
    logoutUrl: "/logout"
  };
}

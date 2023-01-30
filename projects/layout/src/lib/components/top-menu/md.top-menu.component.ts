import {Component, Input} from "@angular/core";
import {HeaderMenu, User} from "./md.top-menu.model";

@Component({
  selector: 'md-top-menu',
  template: `
    <button mat-icon-button [matMenuTriggerFor]="menuHeader" aria-label="Menu Icon">
      <mat-icon>{{ icon }}</mat-icon>
    </button>
    <mat-menu #menuHeader>
      <mat-card-header *ngIf="user">
        <mat-card-title>{{ user.user_name }}</mat-card-title>
        <mat-card-subtitle>{{ user.email }}</mat-card-subtitle>
      </mat-card-header>
      <mat-divider></mat-divider>
      <div *ngFor="let item of menu">
        <a *ngIf="!item.disabled" [routerLink]="item.link" class="hide-underline">
          <button mat-menu-item>
            <mat-icon>{{ item.icon }}</mat-icon>
            <span>{{ item.title }}</span>
          </button>
        </a>
        <button *ngIf="item.disabled" mat-menu-item disabled>
          <mat-icon>{{ item.icon }}</mat-icon>
          <span>{{ item.title }}</span>
        </button>
      </div>
      <mat-divider></mat-divider>
      <a [routerLink]="logoutUrl" class="hide-underline">
        <button mat-menu-item>
          <mat-icon>logout</mat-icon>
          <span>Logout</span>
        </button>
      </a>
    </mat-menu>
  `,
  styleUrls: ["./md.top-menu.component.scss"]
})
export class MdTopMenuComponent {
  @Input()
  icon = "account_circle";

  @Input()
  user?: User;

  @Input()
  menu?: HeaderMenu[];

  @Input()
  logoutUrl: string = "/logout";
}

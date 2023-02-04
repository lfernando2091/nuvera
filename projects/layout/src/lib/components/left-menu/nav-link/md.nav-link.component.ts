import {ChangeDetectionStrategy, Component, Input} from "@angular/core";
import {animate, state, style, transition, trigger} from "@angular/animations";
import {Account} from "../../../models";
import { MdDashboardContainerService } from "../../../services";
import {LinkSection} from "../../../models";

@Component({
  selector: 'md-nav-link',
  animations: [
    trigger('inItem', [
      state('in', style({ })),
      transition('void => in', [
        style({ opacity: 0 }),
        animate('600ms cubic-bezier(0.2, 0, 0, 1)', style({ opacity: 1 })),
      ])
    ])
  ],
  template: `
    <md-account-info>
      <img logoIcon src="https://angular-material.fusetheme.com/assets/images/logo/logo.svg" alt="logo-icon"/>
      <div titleName class="ellipsis-txt">Some Name Business</div>
      <div roleName class="ellipsis-txt">Administrator</div>
      <button accountMenu mat-icon-button aria-label="Accounts Menu" (click)="toggleAccounts()">
        <mat-icon>sync</mat-icon>
      </button>
    </md-account-info>
    <ng-template [ngIf]="sections && !showAccounts">
      <ng-template ngFor let-section [ngForOf]="sections">
        <ng-template [ngIf]="!section.links">
          <a [@inItem]="'in'" class="item" [routerLink]="section.link" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">
            <md-link-button disabled routerLinkActive="active">
              <mat-icon preIcon>{{ section.icon }}</mat-icon>
              <div label>{{ section.label }}</div>
            </md-link-button>
          </a>
        </ng-template>
        <ng-template [ngIf]="section.links">
          <div [@inItem]="'in'" class="section-name">{{ section.label.toUpperCase() }}</div>
          <a [@inItem]="'in'" class="item" [routerLink]="section.link" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">
            <md-link-button disabled routerLinkActive="active">
              <mat-icon preIcon>apps</mat-icon>
              <div label>Menu</div>
            </md-link-button>
          </a>
          <ng-template ngFor let-sectLinks [ngForOf]="section.links">
            <ng-template [ngIf]="!sectLinks.subLinks">
              <a [@inItem]="'in'" class="item" [routerLink]="sectLinks.link" routerLinkActive="active">
                <md-link-button disabled routerLinkActive="active">
                  <mat-icon preIcon>{{ sectLinks.icon }}</mat-icon>
                  <div label>{{ sectLinks.label }}</div>
                </md-link-button>
              </a>
            </ng-template>
            <ng-template [ngIf]="sectLinks.subLinks">
              <md-sublink [link]="sectLinks"></md-sublink>
            </ng-template>
          </ng-template>
        </ng-template>
      </ng-template>
    </ng-template>
    <ng-template [ngIf]="showAccounts">
      <md-account-menu *ngIf="accounts$ | async as accounts; else loading" (onClose)="onClose()">
        <div menuContent class="sub-menu-list">
          <div [@inItem]="'in'" class="md-button" *ngFor="let account of accounts.list" (click)="onSelectAccount(account.id)" [class.active]="account.id === accounts.selected">
            <md-link-button disabled>
              <div label>{{ account.name }}</div>
            </md-link-button>
          </div>
        </div>
      </md-account-menu>
      <ng-template #loading>
        <mat-progress-bar mode="indeterminate"></mat-progress-bar>
      </ng-template>
    </ng-template>
  `,
  styleUrls: ["./md.nav-link.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MdNavLinkComponent {
  @Input()
  sections?: LinkSection[];

  showAccounts = false;
  accounts$ = this.dashboard.getAccounts$();
  // accounts: Account[] = [
  //   { id: "0", name: "Account 1" },
  //   { id: "1", name: "Account 2" },
  //   { id: "2", name: "Account 3" },
  //   { id: "3", name: "Account 4" }
  // ];
  // activeAccount = "2";

  constructor(
    private dashboard: MdDashboardContainerService
  ) {
  }

  toggleAccounts() {
    this.showAccounts = !this.showAccounts;
  }

  onSelectAccount(id: string) {
    // if (this.activeAccount !== id) {
    //   this.dashboard.eventOnChangeAccount$.emit(id);
    // }
  }

  onClose() {
    this.showAccounts = false;
  }
}

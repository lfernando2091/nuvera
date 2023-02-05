import {ChangeDetectionStrategy, Component, Input} from "@angular/core";
import {animate, state, style, transition, trigger} from "@angular/animations";
import { MdDashboardContainerService } from "../../../services";
import {Account, LinkSection} from "../../../models";

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
    <ng-container *ngIf="{
        account: account$ | async,
        accounts: accounts$ | async
      } as observables">
      <md-account-info *ngIf="observables.account">
        <img logoIcon [src]="observables.account.business.logo" alt="logo-icon"/>
        <div titleName class="ellipsis-txt">{{ observables.account.business.name }}</div>
        <div roleName class="ellipsis-txt">{{ observables.account.role }}</div>
        <button accountMenu
        *ngIf="observables.accounts && observables.accounts.length > 1"
                mat-icon-button aria-label="Accounts Menu"
                (click)="toggleAccounts()">
          <mat-icon>sync</mat-icon>
        </button>
      </md-account-info>
    </ng-container>
    <ng-container *ngIf="sections && !showAccounts">
      <ng-template ngFor let-section [ngForOf]="sections">
        <ng-container *ngIf="!section.links">
          <a [@inItem]="'in'" class="item" [routerLink]="section.link" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">
            <md-link-button disabled routerLinkActive="active">
              <mat-icon preIcon>{{ section.icon }}</mat-icon>
              <div label>{{ section.label }}</div>
            </md-link-button>
          </a>
        </ng-container>
        <ng-container *ngIf="section.links">
          <div [@inItem]="'in'" class="section-name">{{ section.label.toUpperCase() }}</div>
          <a [@inItem]="'in'" class="item" [routerLink]="section.link" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">
            <md-link-button disabled routerLinkActive="active">
              <mat-icon preIcon>apps</mat-icon>
              <div label>Menu</div>
            </md-link-button>
          </a>
          <ng-template ngFor let-sectLinks [ngForOf]="section.links">
            <ng-container *ngIf="!sectLinks.subLinks">
              <a [@inItem]="'in'" class="item" [routerLink]="sectLinks.link" routerLinkActive="active">
                <md-link-button disabled routerLinkActive="active">
                  <mat-icon preIcon>{{ sectLinks.icon }}</mat-icon>
                  <div label>{{ sectLinks.label }}</div>
                </md-link-button>
              </a>
            </ng-container>
            <ng-container *ngIf="sectLinks.subLinks">
              <md-sublink [link]="sectLinks"></md-sublink>
            </ng-container>
          </ng-template>
        </ng-container>
      </ng-template>
    </ng-container>
    <ng-container *ngIf="showAccounts">
      <ng-container *ngIf="{
        accounts: accounts$ | async,
        account: account$ | async
      } as observables">
        <md-account-menu *ngIf="observables.accounts; else loading" (onClose)="onClose()">
          <div menuContent class="sub-menu-list">
            <div [@inItem]="'in'" class="md-button" *ngFor="let acc of observables.accounts" (click)="onSelectAccount(acc)" [class.active]="observables.account && acc.business.id === observables.account.business.id">
              <md-link-button disabled>
                <div label>{{ acc.business.name }}</div>
              </md-link-button>
            </div>
          </div>
        </md-account-menu>
        <ng-template #loading>
          <mat-progress-bar mode="indeterminate"></mat-progress-bar>
        </ng-template>
      </ng-container>
    </ng-container>
  `,
  styleUrls: ["./md.nav-link.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MdNavLinkComponent {
  @Input()
  sections?: LinkSection[];

  showAccounts = false;
  accounts$ = this.dashboard.getAccounts$();
  account$ = this.dashboard.getAccount$();

  constructor(
    private dashboard: MdDashboardContainerService
  ) {
  }

  toggleAccounts() {
    this.showAccounts = !this.showAccounts;
  }

  onSelectAccount(value: Account) {
    this.dashboard.setAccount$(value);
  }

  onClose() {
    this.showAccounts = false;
  }
}

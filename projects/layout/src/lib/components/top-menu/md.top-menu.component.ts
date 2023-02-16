import {ChangeDetectionStrategy, Component, Input, ViewChild} from "@angular/core";
import {MdDashboardBreakpointsService, MdDashboardContainerService} from "../../services";
import {ScreenView} from "../../models";
import {MatMenu} from "@angular/material/menu";
import {MatBottomSheet} from "@angular/material/bottom-sheet";
import {MdTopMenuBottomSheet} from "./md.top-menu.bottom-sheet";
import {BottomSheetResponse, HeaderSmConfig} from "./md.top-menu.model";

@Component({
  selector: 'md-top-menu',
  template: `
    <ng-container *ngIf="{
        screen: screen$ | async,
        headerMenu: headerMenu$ | async
    } as vm">
      <button mat-icon-button [matMenuTriggerFor]="vm.screen !== screenTypes.Small ? matMenu: null" (click)="onOpenMenu()" aria-label="Menu Icon">
        <mat-icon>{{ icon }}</mat-icon>
      </button>
      <mat-menu *ngIf="vm.screen !== screenTypes.Small" class="md-context-menu-content">
        <div *ngIf="user$ | async as user" class="md-profile">
          <div class="mat-h4">{{ user.user_name }}</div>
          <div class="mat-h4">{{ user.email }}</div>
        </div>
        <mat-divider></mat-divider>
        <ng-container *ngIf="vm.headerMenu">
          <div *ngFor="let item of vm.headerMenu">
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
    </ng-container>
  `,
  styleUrls: ["./md.top-menu.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MdTopMenuComponent {
  @Input()
  icon = "account_circle";

  @Input()
  logoutUrl = "/logout";

  @ViewChild(MatMenu) matMenu!: MatMenu;

  headerMenu$ = this.dashboardContainerService.getHeaderMenu$();
  user$ = this.dashboardContainerService.getUser$();
  screen$ = this.breakpoint.getScreen$();
  screenTypes = ScreenView;

  constructor(
    private dashboardContainerService: MdDashboardContainerService,
    private breakpoint: MdDashboardBreakpointsService,
    private _bottomSheet: MatBottomSheet
  ) {
  }

  onOpenMenu() {
    if (this.breakpoint.getScreenData() === ScreenView.Small) {
      this._bottomSheet.open<MdTopMenuBottomSheet, HeaderSmConfig, BottomSheetResponse>(
        MdTopMenuBottomSheet,
        {
          data: {
            logoutUrl: this.logoutUrl,
            user: this.dashboardContainerService.getUserData(),
            menu: this.dashboardContainerService.getHeaderMenuData()
          }
        }
      ).afterDismissed()
        .subscribe((res) => {

        });
    }
  }
}

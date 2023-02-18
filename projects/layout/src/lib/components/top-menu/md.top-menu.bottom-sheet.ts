import {ChangeDetectionStrategy, Component, Inject} from "@angular/core";
import {MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef} from "@angular/material/bottom-sheet";
import {BottomSheetResponse, HeaderSmConfig} from "./md.top-menu.model";

@Component({
  selector: 'md-top-menu-bottom-sheet',
  template: `
    <div *ngIf="data.user" class="md-profile">
      <div><b>{{ data.user.user_name }}</b></div>
      <div>{{ data.user.email }}</div>
    </div>
    <mat-divider></mat-divider>
    <ng-container *ngIf="data.menu">
      <mat-nav-list>
        <ng-container *ngFor="let item of data.menu">
          <a class="md-primary-color" *ngIf="!item.disabled" [routerLink]="item.link" mat-list-item (click)="openLink($event)">
            <mat-icon matListItemIcon>{{ item.icon }}</mat-icon>
            <span matListItemTitle>{{ item.title }}</span>
          </a>
          <mat-list-item class="md-primary-color"  *ngIf="item.disabled" disabled>
            <mat-icon matListItemIcon>{{ item.icon }}</mat-icon>
            <span matListItemTitle>{{ item.title }}</span>
          </mat-list-item>
        </ng-container>
      </mat-nav-list>
      <mat-divider></mat-divider>
      <mat-nav-list>
        <a class="md-primary-color" mat-list-item [routerLink]="data.logoutUrl" (click)="openLink($event)">
          <mat-icon matListItemIcon>logout</mat-icon>
          <span matListItemTitle>Logout</span>
        </a>
      </mat-nav-list>
      <mat-divider></mat-divider>
      <mat-nav-list>
        <mat-list-item class="md-primary-color" (click)="openLink($event)">
          <mat-icon matListItemIcon>close</mat-icon>
          <span matListItemTitle>Cancel</span>
        </mat-list-item>
      </mat-nav-list>
    </ng-container>
  `,
  styleUrls: ["./md.top-menu.bottom-sheet.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MdTopMenuBottomSheet {
  data: HeaderSmConfig;

  constructor(
    private _bottomSheetRef: MatBottomSheetRef<MdTopMenuBottomSheet, BottomSheetResponse>,
    @Inject(MAT_BOTTOM_SHEET_DATA) _data: HeaderSmConfig
  ) {
    this.data = _data;
  }

  openLink(event: MouseEvent) {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
}

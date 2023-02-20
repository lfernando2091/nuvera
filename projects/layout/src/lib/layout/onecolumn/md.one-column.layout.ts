import {ChangeDetectionStrategy, Component} from "@angular/core";
import {MdDashboardLayoutService} from "../../services";

@Component({
  selector: 'md-one-column-layout',
  template: `
    <ng-container *ngIf="{
        loading: loading$ | async
    } as vm">
      <mat-progress-bar *ngIf="vm.loading" color="accent" mode="indeterminate"></mat-progress-bar>
      <md-body class="one-column">
        <ng-content></ng-content>
        <md-footer>
          <ng-content select="[footer]"></ng-content>
        </md-footer>
      </md-body>
    </ng-container>
  `,
  styleUrls: ["./md.one-column.layout.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MdOneColumnLayout {
  loading$ = this.layoutService.loading$();

  constructor(
    private layoutService: MdDashboardLayoutService,
  ) {
  }
}

import {Component, Input} from "@angular/core";

@Component({
  selector: 'md-top-menu',
  template: `
    <button mat-icon-button [matMenuTriggerFor]="menu" aria-label="Menu Icon">
      <mat-icon>{{ icon }}</mat-icon>
    </button>
    <mat-menu #menu>
    </mat-menu>
  `,
  styleUrls: ["./md.top-menu.component.scss"]
})
export class MdTopMenuComponent {
  @Input()
  icon = "account_circle";
}

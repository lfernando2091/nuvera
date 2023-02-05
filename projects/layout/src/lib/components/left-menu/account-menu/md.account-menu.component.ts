import {ChangeDetectionStrategy, Component, EventEmitter, Output} from "@angular/core";
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'md-account-menu',
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
    <div [@inItem]="'in'" (click)="onBack()" class="back-button">
      <md-link-button disabled>
        <mat-icon preIcon>arrow_back</mat-icon>
        <div label>Main menu</div>
      </md-link-button>
    </div>
    <ng-content select="[menuContent]"></ng-content>
  `,
  styleUrls: ["./md.account-menu.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MdAccountMenuComponent {
  @Output()
  onClose: EventEmitter<void>;

  constructor() {
    this.onClose = new EventEmitter<void>();
  }

  onBack() {
    this.onClose.emit();
  }
}

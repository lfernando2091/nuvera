import {Component, EventEmitter, HostListener, Input, Output} from "@angular/core";

@Component({
  selector: 'md-toggle-button',
  template: `
    <div class="md-toggle-button" [class.active]="active">
      <div class="first">
        <ng-content select="[first]"></ng-content>
      </div>
      <div class="second">
        <ng-content select="[second]"></ng-content>
      </div>
    </div>
  `,
  styleUrls: ["./md.toggle-button.component.scss"]
})
export class MdToggleButtonComponent {
  @Input()
  active = false;

  @Output()
  onToggle: EventEmitter<boolean>;

  constructor() {
    this.onToggle = new EventEmitter<boolean>();
  }

  @HostListener('click') onClick() {
    this.active = !this.active;
    this.onToggle.emit(this.active);
  }
}

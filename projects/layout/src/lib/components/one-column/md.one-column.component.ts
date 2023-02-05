import {ChangeDetectionStrategy, Component} from "@angular/core";

@Component({
  selector: 'md-one-column',
  template: `
    <ng-content></ng-content>
  `,
  styleUrls: ["./md.one-column.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MdOneColumnComponent {

}

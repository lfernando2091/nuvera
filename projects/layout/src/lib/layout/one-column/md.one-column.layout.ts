import {ChangeDetectionStrategy, Component} from "@angular/core";

@Component({
  selector: 'md-one-column-layout',
  template: `
    <md-body class="one-column">
      <ng-content></ng-content>
      <md-footer>
        <ng-content select="[footer]"></ng-content>
      </md-footer>
    </md-body>
  `,
  styleUrls: ["./md.one-column.layout.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MdOneColumnLayout {

}

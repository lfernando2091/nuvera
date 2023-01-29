import {Component} from "@angular/core";

@Component({
  selector: 'md-body',
  template: `
    <div class="content">
      <div class="columns">
        <ng-content></ng-content>
      </div>
      <ng-content select="md-footer"></ng-content>
    </div>
  `,
  styleUrls: ["./md.body.component.scss"]
})
export class MdBodyComponent {
}

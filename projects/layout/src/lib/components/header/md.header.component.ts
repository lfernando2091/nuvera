import {Component} from "@angular/core";

@Component({
  selector: 'md-header',
  template: `
    <ng-content></ng-content>
  `,
  styleUrls: ["./md.header.component.scss"]
})
export class MdHeaderComponent {
}

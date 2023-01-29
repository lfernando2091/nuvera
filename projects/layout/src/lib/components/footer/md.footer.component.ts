import {Component} from "@angular/core";

@Component({
  selector: 'md-footer',
  template: `
    <footer>
      <ng-content></ng-content>
    </footer>
  `,
  styleUrls: ["./md.footer.component.scss"]
})
export class MdFooterComponent {
}

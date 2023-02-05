import {ChangeDetectionStrategy, Component} from "@angular/core";

@Component({
  selector: 'md-footer',
  template: `
    <footer>
      <ng-content></ng-content>
    </footer>
  `,
  styleUrls: ["./md.footer.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MdFooterComponent {
}

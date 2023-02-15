import {ChangeDetectionStrategy, Component} from "@angular/core";

@Component({
  selector: 'md-footer',
  template: `
    <mat-divider></mat-divider>
    <footer>
      <ng-content></ng-content>
    </footer>
  `,
  styleUrls: ["./md.footer.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MdFooterComponent {
}

import {ChangeDetectionStrategy, Component, Input} from "@angular/core";
import {MdDrawerService} from "../../services/dashboard/md.drawer.service";

@Component({
  selector: 'md-drawer',
  template: `
    <h1>drawer content</h1>
  `,
  styleUrls: ["./md.drawer.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MdDrawerComponent {
  openDrawer$ = this.mdDrawer.getOpen$();

  constructor(
    private mdDrawer: MdDrawerService
  ) {
  }
}

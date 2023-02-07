import {Component, Inject} from "@angular/core";
import {MD_DRAWER_DATA, MdDrawerRefService} from "../../../../../layout/src/lib/services";

@Component({
  selector: 'app-panel-right',
  template: `
    <h1>Panel 1</h1>
    <h1>Panel 1</h1>
    <h1>Panel 1</h1>
    <h1>Panel 1</h1>
    <h1>Panel 1</h1>
    <h1>Panel 1</h1>
    <h1>Panel 1</h1>
    <h1>Panel 1</h1>
    <h1>Panel 1</h1>
    <h1>Panel 1</h1>
    <h1>Panel 1</h1>
    <h1>Panel 1</h1>
    <h1>Panel 1</h1>
    <h1>Panel 1</h1>
    <h1>Panel 1</h1>
    <h1>Panel 1</h1>
    <h1>Panel 1</h1>
    <h1>Panel 1</h1>
  `,
  styleUrls: ['./panel-right.component.scss']
})
export class PanelRightComponent {

  constructor(
    private ref: MdDrawerRefService,
    @Inject(MD_DRAWER_DATA) data: any
  ) {
    console.log(data);
  }
}

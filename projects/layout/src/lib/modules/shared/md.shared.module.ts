import {NgModule} from "@angular/core";
import {MdBodyComponent, MdFooterComponent} from "../../components";
import {MatDividerModule} from "@angular/material/divider";

const MATERIAL_UI = [
  MatDividerModule
];

const COMPONENTS = [
  MdBodyComponent,
  MdFooterComponent
];

@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    ...MATERIAL_UI
  ],
  exports: [
    ...COMPONENTS
  ]
})
export class MdSharedModule {

}

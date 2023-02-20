import {NgModule} from "@angular/core";
import {MdOneColumnLayout} from "../../layout";
import {MdSharedModule} from "../shared/md.shared.module";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {CommonModule} from "@angular/common";

const COMPONENTS = [
  MdOneColumnLayout
];

const MATERIAL_UI = [
  MatProgressBarModule
];

@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    MdSharedModule,
    CommonModule,
    ...MATERIAL_UI
  ],
  exports: [
    ...COMPONENTS
  ]
})
export class MdOneColumnLayoutModule {

}

import {NgModule} from "@angular/core";
import {MdOneColumnLayout} from "../../layout";
import {MdSharedModule} from "../shared/md.shared.module";

const COMPONENTS = [
  MdOneColumnLayout
];

// const MATERIAL_UI = [
//
// ];

@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    MdSharedModule
    // ...MATERIAL_UI
  ],
  exports: [
    ...COMPONENTS
  ]
})
export class MdOneColumnLayoutModule {

}

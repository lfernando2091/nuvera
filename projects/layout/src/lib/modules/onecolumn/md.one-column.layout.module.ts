import {NgModule} from "@angular/core";
import {MdOneColumnLayout} from "../../layout";
import {MdSharedModule} from "../shared/md.shared.module";

const COMPONENTS = [
  MdOneColumnLayout
];

@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    MdSharedModule
  ],
  exports: [
    ...COMPONENTS
  ]
})
export class MdOneColumnLayoutModule {

}

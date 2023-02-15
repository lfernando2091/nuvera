import {NgModule} from "@angular/core";
import {SubmenuComponent} from "./submenu.component";
import {SubmenuRoutingModule} from "./submenu-routing.module";
import {HomeSub1Component} from "./home-sub1/home-sub1.component";
import {SubComponent} from "./sub2/sub.component";

const COMPONENTS = [
  SubmenuComponent,
  HomeSub1Component,
  SubComponent
];

@NgModule({
  imports: [
    SubmenuRoutingModule
  ],
  declarations: [
    ...COMPONENTS
  ],
  exports: [
    ...COMPONENTS
  ],
})
export class SubmenuModule {

}

import {NgModule} from "@angular/core";
import {Home2Component} from "./home-2/home-2.component";
import {Home1Component} from "./home-1/home-1.component";
import {PagesRoutingModule} from "./pages-routing.module";
import {PagesComponent} from "./pages.component";
import {MdDashboardLayoutModule} from "../../../../layout/src/lib/modules";
import {PanelRightComponent} from "./panel-right/panel-right.component";

const COMPONENTS = [
  PagesComponent,
  PanelRightComponent,
  Home1Component,
  Home2Component
];

@NgModule({
  imports: [
    PagesRoutingModule,
    MdDashboardLayoutModule
  ],
  declarations: [
    ...COMPONENTS
  ],
  exports: [
    ...COMPONENTS
  ],
})
export class PagesModule {
}

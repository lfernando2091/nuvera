import {NgModule} from "@angular/core";
import {Home2Component} from "./home-2/home-2.component";
import {Home1Component} from "./home-1/home-1.component";
import {PagesRoutingModule} from "./pages-routing.module";
import {PagesComponent} from "./pages.component";
import {MdLayoutModule} from "../../../../layout/src/lib/md.layout.module";

const COMPONENTS = [
  PagesComponent,
  Home1Component,
  Home2Component
];

@NgModule({
  imports: [
    PagesRoutingModule,
    MdLayoutModule
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

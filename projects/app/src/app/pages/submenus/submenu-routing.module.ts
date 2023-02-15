import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {SubmenuComponent} from "./submenu.component";
import {HomeSub1Component} from "./home-sub1/home-sub1.component";
import {SubComponent} from "./sub2/sub.component";

const routes: Routes = [{
  path: '',
  component: SubmenuComponent,
  children: [
    {
      path: "",
      component: HomeSub1Component
    },
    {
      path: "business",
      component: SubComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubmenuRoutingModule {
}

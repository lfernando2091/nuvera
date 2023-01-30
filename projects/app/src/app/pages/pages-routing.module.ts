import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {PagesComponent} from "./pages.component";
import {Home1Component} from "./home-1/home-1.component";
import {Home2Component} from "./home-2/home-2.component";

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'home-1',
      component: Home1Component,
    },
    {
      path: 'ma/home-2',
      component: Home2Component,
    },
    {
      path: 'ma/home-3',
      component: Home2Component,
    },
    {
      path: 'ma',
      component: Home2Component,
    },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}

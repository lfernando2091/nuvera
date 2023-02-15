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
      path: '',
      component: Home1Component,
    },
    {
      path: 'analytics',
      component: Home2Component,
    },
    {
      path: 'finance',
      component: Home2Component,
    },
    {
      path: 'ma',
      loadChildren: () => import('./submenus/submenu.module')
        .then(m => m.SubmenuModule),
    },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}

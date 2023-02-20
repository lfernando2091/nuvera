import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./login.component";
import {HomeComponent} from "./home/home.component";

const routes: Routes = [{
  path: '',
  component: LoginComponent,
  children: [
    {
      path: '',
      component: HomeComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginRoutingModule {

}

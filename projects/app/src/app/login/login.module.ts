import {NgModule} from "@angular/core";
import {LoginComponent} from "./login.component";
import {LoginRoutingModule} from "./login-routing.module";
import {HomeComponent} from "./home/home.component";
import {MdOneColumnLayoutModule} from "../../../../layout/src/lib/modules";

const COMPONENTS = [
  LoginComponent,
  HomeComponent
];

@NgModule({
  imports: [
    LoginRoutingModule,
    MdOneColumnLayoutModule
  ],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS]
})
export class LoginModule {

}

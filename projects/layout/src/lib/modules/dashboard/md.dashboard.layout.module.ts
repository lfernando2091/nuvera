import {NgModule} from "@angular/core";
import {MdDashboardContainer} from "../../containers";
import {MdDashboardLayout} from "../../layout";
import {
  MdAccountInfoComponent, MdAccountMenuComponent,
  MdBodyComponent, MdDrawerComponent,
  MdFooterComponent,
  MdHeaderComponent, MdLinkButtonComponent, MdNavLinkComponent,
  MdOneColumnComponent, MdRailMenuComponent, MdSublinkComponent, MdToggleButtonComponent,
  MdTopMenuComponent
} from "../../components";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatMenuModule} from "@angular/material/menu";
import {MatDividerModule} from "@angular/material/divider";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {LayoutModule} from "@angular/cdk/layout";
import {MatProgressBarModule} from "@angular/material/progress-bar";

const COMPONENTS = [
  MdDashboardContainer,
  MdDashboardLayout,
  MdHeaderComponent,
  MdBodyComponent,
  MdFooterComponent,
  MdOneColumnComponent,
  MdTopMenuComponent,
  MdNavLinkComponent,
  MdLinkButtonComponent,
  MdSublinkComponent,
  MdRailMenuComponent,
  MdToggleButtonComponent,
  MdAccountInfoComponent,
  MdAccountMenuComponent,
  MdDrawerComponent
];

const MATERIAL_UI = [
  MatSidenavModule,
  MatButtonModule,
  MatIconModule,
  MatMenuModule,
  MatDividerModule,
  MatProgressBarModule
];

@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    CommonModule,
    RouterModule,
    LayoutModule,
    ...MATERIAL_UI
  ],
  exports: [
    ...COMPONENTS
  ]
})
export class MdDashboardLayoutModule {

}

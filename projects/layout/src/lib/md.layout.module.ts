import { NgModule } from '@angular/core';
import { MdLayoutComponent } from './md.layout.component';
import {MdDashboardContainer} from "./containers";
import {MdDashboardLayout} from "./layout";
import {MatSidenavModule} from "@angular/material/sidenav";
import {CommonModule} from "@angular/common";
import {MatButtonModule} from "@angular/material/button";
import {
  MdBodyComponent,
  MdFooterComponent,
  MdHeaderComponent, MdLinkButtonComponent, MdNavLinkComponent,
  MdOneColumnComponent,
  MdTopMenuComponent
} from "./components";
import {MatIconModule} from "@angular/material/icon";
import {MatMenuModule} from "@angular/material/menu";
import {RouterModule} from "@angular/router";

const COMPONENTS = [
  MdLayoutComponent,
  MdDashboardContainer,
  MdDashboardLayout,
  MdHeaderComponent,
  MdBodyComponent,
  MdFooterComponent,
  MdOneColumnComponent,
  MdTopMenuComponent,
  MdNavLinkComponent,
  MdLinkButtonComponent
];

const MATERIAL_UI = [
  MatSidenavModule,
  MatButtonModule,
  MatIconModule,
  MatMenuModule
];

@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    CommonModule,
    RouterModule,
    ...MATERIAL_UI
  ],
  exports: [
    ...COMPONENTS
  ]
})
export class MdLayoutModule { }

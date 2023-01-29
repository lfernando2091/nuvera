import { NgModule } from '@angular/core';
import { MdLayoutComponent } from './md.layout.component';
import {MdDashboardContainer} from "./containers";
import {MdDashboardLayout} from "./layout";
import {MatSidenavModule} from "@angular/material/sidenav";
import {CommonModule} from "@angular/common";
import {MatButtonModule} from "@angular/material/button";

const COMPONENTS = [
  MdLayoutComponent,
  MdDashboardContainer,
  MdDashboardLayout
];

const MATERIAL_UI = [
  MatSidenavModule,
  MatButtonModule
];

@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    CommonModule,
    ...MATERIAL_UI
  ],
  exports: [
    ...COMPONENTS
  ]
})
export class MdLayoutModule { }

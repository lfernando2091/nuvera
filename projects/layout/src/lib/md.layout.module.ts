import { NgModule } from '@angular/core';
import { MdLayoutComponent } from './md.layout.component';
import {MdDashboardContainer} from "./containers";
import {MdDashboardLayout} from "./layout";

const COMPONENTS = [
  MdLayoutComponent,
  MdDashboardContainer,
  MdDashboardLayout
];

@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
  ],
  exports: [
    ...COMPONENTS
  ]
})
export class MdLayoutModule { }

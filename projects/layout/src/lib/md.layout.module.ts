import {NgModule} from '@angular/core';
import { MdLayoutComponent } from './md.layout.component';
import {MdDashboardContainer, MdDashboardContainerService} from "./containers";
import {MdDashboardLayout} from "./layout";
import {MatSidenavModule} from "@angular/material/sidenav";
import {CommonModule} from "@angular/common";
import {MatButtonModule} from "@angular/material/button";
import {
  MdBodyComponent,
  MdFooterComponent,
  MdHeaderComponent, MdLinkButtonComponent, MdNavLinkComponent,
  MdOneColumnComponent, MdRailMenuComponent, MdSublinkComponent,
  MdTopMenuComponent
} from "./components";
import {MatIconModule} from "@angular/material/icon";
import {MatMenuModule} from "@angular/material/menu";
import {RouterModule} from "@angular/router";
import {LayoutModule} from "@angular/cdk/layout";

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
  MdLinkButtonComponent,
  MdSublinkComponent,
  MdRailMenuComponent
];

const MATERIAL_UI = [
  MatSidenavModule,
  MatButtonModule,
  MatIconModule,
  MatMenuModule
];

const SERVICES = [
  MdDashboardContainerService
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
  ],
  providers: [
    ...SERVICES
  ]
})
export class MdLayoutModule {
  // static forRoot(config: UserServiceConfig): ModuleWithProviders<MdLayoutModule> {
  //   return {
  //     ngModule: MdLayoutModule,
  //     providers: [
  //       {provide: MdDashboardContainerService, useValue: config }
  //     ]
  //   };
  // }
}

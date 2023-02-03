import {NgModule} from '@angular/core';
import { MdLayoutComponent } from './md.layout.component';
import {MdDashboardContainer} from "./containers";
import {MdDashboardLayout} from "./layout";
import {MatSidenavModule} from "@angular/material/sidenav";
import {CommonModule} from "@angular/common";
import {MatButtonModule} from "@angular/material/button";
import {
  MdAccountInfoComponent, MdAccountMenuComponent,
  MdBodyComponent,
  MdFooterComponent,
  MdHeaderComponent, MdLinkButtonComponent, MdNavLinkComponent,
  MdOneColumnComponent, MdRailMenuComponent, MdSublinkComponent, MdToggleButtonComponent,
  MdTopMenuComponent
} from "./components";
import {MatIconModule} from "@angular/material/icon";
import {MatMenuModule} from "@angular/material/menu";
import {RouterModule} from "@angular/router";
import {LayoutModule} from "@angular/cdk/layout";
import {MatDividerModule} from "@angular/material/divider";
import {MdDashboardContainerService, MdDashboardLayoutService} from "./services";

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
  MdRailMenuComponent,
  MdToggleButtonComponent,
  MdAccountInfoComponent,
  MdAccountMenuComponent
];

const MATERIAL_UI = [
  MatSidenavModule,
  MatButtonModule,
  MatIconModule,
  MatMenuModule,
  MatDividerModule
];

const SERVICES = [
  MdDashboardContainerService,
  MdDashboardLayoutService
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

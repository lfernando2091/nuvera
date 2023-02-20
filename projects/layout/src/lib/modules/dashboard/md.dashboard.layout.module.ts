import {NgModule} from "@angular/core";
import {MdDashboardContainer} from "../../containers";
import {MdDashboardLayout} from "../../layout";
import {
  MdAccountInfoComponent, MdAccountMenuComponent, MdDrawerComponent,
  MdHeaderComponent, MdLinkButtonComponent, MdNavLinkComponent,
  MdOneColumnComponent, MdRailMenuComponent, MdSublinkComponent, MdToggleButtonComponent, MdTopMenuBottomSheet,
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
import {PortalModule} from "@angular/cdk/portal";
import {MdDrawerService} from "../../services";
import {MdDrawerControllerService} from "../../services/dashboard/md.drawer-controller.service";
import {Unsubscribe} from "../../utils";
import {MatBottomSheetModule} from "@angular/material/bottom-sheet";
import {MatListModule} from "@angular/material/list";
import {MdSharedModule} from "../shared/md.shared.module";

const COMPONENTS = [
  MdDashboardContainer,
  MdDashboardLayout,
  MdHeaderComponent,
  MdOneColumnComponent,
  MdTopMenuComponent,
  MdTopMenuBottomSheet,
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
  MatProgressBarModule,
  MatBottomSheetModule,
  MatListModule
];

@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    CommonModule,
    RouterModule,
    LayoutModule,
    PortalModule,
    MdSharedModule,
    ...MATERIAL_UI
  ],
  exports: [
    ...COMPONENTS
  ],
  providers: [
    MdDrawerService,
    MdDrawerControllerService,
    Unsubscribe
  ]
})
export class MdDashboardLayoutModule {

}

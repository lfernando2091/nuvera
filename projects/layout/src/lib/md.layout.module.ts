import {ModuleWithProviders, NgModule} from '@angular/core';
import {MdDashboardBreakpointsService, MdDashboardContainerService, MdDashboardLayoutService} from "./services";
import {MdDrawerService} from "./services/dashboard/md.drawer.service";

@NgModule({})
export class MdLayoutModule {
  static forRoot(): ModuleWithProviders<MdLayoutModule> {
    return {
      ngModule: MdLayoutModule,
      providers: [
        // {provide: MdDashboardContainerService, useValue: config }
        MdDashboardContainerService,
        MdDashboardLayoutService,
        MdDashboardBreakpointsService,
        MdDrawerService
      ]
    };
  }
}

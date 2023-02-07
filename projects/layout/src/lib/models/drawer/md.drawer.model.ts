import {ViewContainerRef} from "@angular/core";

export class MdDrawerConfig<Data = any> {
  title: string = "Some Title";
  viewContainerRef?: ViewContainerRef;
  data?: Data | null = null;
}

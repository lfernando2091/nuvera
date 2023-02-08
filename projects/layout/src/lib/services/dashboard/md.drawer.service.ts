import {ElementRef, Injectable, InjectionToken, Injector, TemplateRef} from "@angular/core";
import {MdDrawerConfig} from "../../models";
import {ComponentType} from "@angular/cdk/overlay";
import {MdDrawerRefService} from "./md.drawer-ref.service";
import {MdDrawerControllerService} from "./md.drawer-controller.service";
import {ComponentPortal, DomPortal, TemplatePortal} from "@angular/cdk/portal";

export const MD_DRAWER_DATA = new InjectionToken<any>('MdDrawerData');

@Injectable()
export class MdDrawerService {
  private ref?: MdDrawerRefService;

  constructor(
    private controller: MdDrawerControllerService,
  ) {
  }

  open<Component, Data = any, Result = any>(
    component: ComponentType<Component>,
    config?: MdDrawerConfig<Data>,
  ): MdDrawerRefService<Result>;

  open<Component, Data = any, Result = any>(
    template: TemplateRef<Component>,
    config?: MdDrawerConfig<Data>,
  ): MdDrawerRefService<Result>;

  open<Component, Data = any, Result = any>(
    dom: ElementRef<HTMLElement>,
    config?: MdDrawerConfig<Data>,
  ): MdDrawerRefService<Result>;

  open<Component, Data = any, Result = any>(
    componentOrTemplateRef: ComponentType<Component> | TemplateRef<Component> | ElementRef<HTMLElement>,
    config?: MdDrawerConfig<Data>,
  ): MdDrawerRefService<Result> {
    this.controller.clear();
    this.ref = undefined;
    const ref = new MdDrawerRefService<Result>(
      this.controller
    );
    this.ref = ref;
    const injector = Injector.create({
      providers: [
        { provide: MD_DRAWER_DATA, useValue: config ? config.data:  {  }},
        { provide: MdDrawerRefService, useValue: ref}
      ]});
    if (componentOrTemplateRef instanceof TemplateRef) {
      this.controller.attachTemplatePortal<Component>(
        new TemplatePortal<Component>(componentOrTemplateRef, null!),
        config ? config.title: "Information"
      );
    } else if(componentOrTemplateRef instanceof ElementRef) {
      this.controller.attachDomPortal(
        new DomPortal<HTMLElement>(componentOrTemplateRef),
        config ? config.title: "Information"
      );
    }
    else {
      this.controller.attachComponentPortal<Component>(
        new ComponentPortal<Component>(componentOrTemplateRef, null, injector),
        config ? config.title: "Information"
      );
    }
    return ref!;
  }

  close<Result = any>(result?: Result) {
    if (this.ref) {
      this.ref.close(result);
      this.ref = undefined;
    }
  }
}

import {ElementRef, Injectable, InjectionToken, Injector, TemplateRef, ViewContainerRef} from "@angular/core";
import {BehaviorSubject} from "rxjs";
import {MdDrawerConfig} from "../../models";
import {ComponentType} from "@angular/cdk/overlay";
import {MdDrawerRefService} from "./md.drawer-ref.service";
import {MdDrawerControllerService} from "./md.drawer-controller.service";
import {ComponentPortal, TemplatePortal} from "@angular/cdk/portal";

export const MD_DRAWER_DATA = new InjectionToken<any>('MdDrawerData');

@Injectable()
export class MdDrawerService {
  private _open$ = new BehaviorSubject<boolean>(false);

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
    const ref = new MdDrawerRefService<Result>(
      this.controller
    );
    const injector = Injector.create({
      providers: [
        { provide: MD_DRAWER_DATA, useValue: config ? config.data:  {  }},
        { provide: MdDrawerRefService, useValue: ref}
      ]});
    this.controller.clear();
    if (componentOrTemplateRef instanceof TemplateRef) {
      this.controller.attachTemplatePortal(
        new TemplatePortal(componentOrTemplateRef, null!)
      );
    } else if(componentOrTemplateRef instanceof ElementRef) {

    }
    else {
      this.controller.attachComponentPortal(
        new ComponentPortal(componentOrTemplateRef, null, injector)
      );
    }
    this._open$.next(true);
    return ref!;
  }

  open$() {
    return this._open$.asObservable();
  }

  close() {
    this._open$.next(false);
    this.controller.clearAndNotify();
  }
}

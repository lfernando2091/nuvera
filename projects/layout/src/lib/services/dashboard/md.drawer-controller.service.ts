import {ComponentRef, EmbeddedViewRef, Injectable} from "@angular/core";
import {BehaviorSubject, filter} from "rxjs";
import {ComponentPortal, TemplatePortal} from "@angular/cdk/portal";

@Injectable()
export class MdDrawerControllerService {
  private _render$ = new BehaviorSubject<ComponentPortal<any> | TemplatePortal | null>(null);
  private _instance$ = new BehaviorSubject<ComponentRef<any> | EmbeddedViewRef<any> | null>(null);

  attachComponentPortal<T>(portal: ComponentPortal<T>) {
    this._render$.next(portal);
  }

  attachTemplatePortal<C>(portal: TemplatePortal<C>) {
    this._render$.next(portal);
  }

  render$() {
    return this._render$.pipe(filter(value => !!value));
  }

  setInstance(component: ComponentRef<any> | EmbeddedViewRef<any>) {
    this._instance$.next(component);
  }

  instance$() {
    return this._instance$.pipe(filter(value => !!value));
  }

  private clear() {
    this._render$.next(null);
  }
}

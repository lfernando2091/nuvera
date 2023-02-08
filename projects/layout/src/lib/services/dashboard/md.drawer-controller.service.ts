import {Injectable} from "@angular/core";
import {BehaviorSubject, filter, Subject} from "rxjs";
import {ComponentPortal, DomPortal, TemplatePortal} from "@angular/cdk/portal";

@Injectable()
export class MdDrawerControllerService {
  private _render$ = new BehaviorSubject<ComponentPortal<any> | TemplatePortal | DomPortal | null>(null);
  private _ready$ = new BehaviorSubject<boolean>(false);
  private _detach$ = new Subject<void>();
  private _title$ = new BehaviorSubject<string | null>(null);

  attachComponentPortal<T>(portal: ComponentPortal<T>, title: string) {
    this._title$.next(title);
    this._render$.next(portal);
  }

  attachTemplatePortal<C>(portal: TemplatePortal<C>, title: string) {
    this._title$.next(title);
    this._render$.next(portal);
  }

  attachDomPortal(portal: DomPortal, title: string) {
    this._title$.next(title);
    this._render$.next(portal);
  }

  render$() {
    return this._render$.pipe(filter(value => !!value));
  }

  detach$() {
    return this._detach$.asObservable();
  }

  clear() {
    this._title$.next(null);
    this._render$.next(null);
    this._detach$.next();
  }

  ready$() {
    return this._ready$.asObservable();
  }

  setReady$(value: boolean) {
    this._ready$.next(value);
  }

  title$() {
    return this._title$.asObservable();
  }
}

import {EventEmitter, Injectable} from "@angular/core";
import {LinkSection} from "../../models";
import {BehaviorSubject, filter, Observable} from "rxjs";

@Injectable()
export class MdDashboardContainerService {
  private readonly _onChangeAccount$: EventEmitter<string>;
  private _sections$ = new BehaviorSubject<LinkSection[]>([]);
  private _navigation$ = new BehaviorSubject<boolean>(true);

  constructor() {
    this._onChangeAccount$ = new EventEmitter<string>();
  }

  get eventOnChangeAccount$(): EventEmitter<string> {
    return this._onChangeAccount$;
  }

  setSections$(values: LinkSection[]) {
    this._sections$.next(values);
  }

  getSections$(): Observable<LinkSection[]> {
    return this._sections$.pipe(
      filter(() => this._navigation$.getValue()),
      filter(values => values.length > 0)
    );
  }

  setNavigation$(value: boolean) {
    this._navigation$.next(value);
  }

  getNavigation$() {
    return this._navigation$.asObservable();
  }
}

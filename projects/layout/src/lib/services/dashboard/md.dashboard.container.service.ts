import {Injectable} from "@angular/core";
import {Account, LinkSection} from "../../models";
import {BehaviorSubject, filter, Observable} from "rxjs";
import {HeaderMenu, User} from "../../components";

@Injectable()
export class MdDashboardContainerService {
  private _sections$ = new BehaviorSubject<LinkSection[]>([]);
  private _accounts$ = new BehaviorSubject<Account[] | null>(null);
  private _account$ = new BehaviorSubject<Account | null>(null);
  private _navigation$ = new BehaviorSubject<boolean>(true);
  private _headerMenu$ = new BehaviorSubject<HeaderMenu[] | null>(null);
  private _user$ = new BehaviorSubject<User | null>(null);
  private _loading$ = new BehaviorSubject<boolean>(true);

  constructor() {
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

  setAccounts$(values: Account[]) {
    this._accounts$.next(values);
  }

  getAccounts$() {
    return this._accounts$.pipe(
      filter(values => !!values)
    );
  }

  setAccount$(value: Account) {
    const selected = this._account$.getValue();
    if (selected && selected.business.id !== value.business.id) {
      this._account$.next(value);
    } else {
      this._account$.next(value);
    }
  }

  getAccount$() {
    return this._account$.pipe(
      filter(values => !!values)
    );
  }

  setNavigation$(value: boolean) {
    this._navigation$.next(value);
  }

  getNavigation$() {
    return this._navigation$.asObservable();
  }

  setHeaderMenu$(values: HeaderMenu[]) {
    this._headerMenu$.next(values);
  }

  getHeaderMenu$() {
    return this._headerMenu$.pipe(
      filter(values => !!values)
    );
  }

  getHeaderMenuData() {
    return this._headerMenu$.getValue();
  }

  setUser$(user: User) {
    this._user$.next(user);
  }

  getUser$() {
    return this._user$.pipe(
      filter(values => !!values)
    );
  }

  getUserData() {
    return this._user$.getValue();
  }

  setLoading$(value: boolean) {
    this._loading$.next(value);
  }

  getLoading$() {
    return this._loading$.asObservable();
  }
}

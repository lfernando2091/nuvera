import {Injectable} from "@angular/core";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable()
export class MdDashboardLayoutService {
  private _loading$ = new BehaviorSubject<boolean>(true);

  setLoading(value: boolean) {
    this._loading$.next(value);
  }

  loading$(): Observable<boolean> {
    return this._loading$.asObservable();
  }

  get loadingData(): boolean {
    return this._loading$.getValue();
  }
}

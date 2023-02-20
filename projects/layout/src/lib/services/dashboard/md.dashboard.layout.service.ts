import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";

@Injectable()
export class MdDashboardLayoutService {
  private _loading$ = new BehaviorSubject<boolean>(true);

  setLoading(value: boolean) {
    this._loading$.next(value);
  }

  loading$() {
    return this._loading$.asObservable();
  }
}

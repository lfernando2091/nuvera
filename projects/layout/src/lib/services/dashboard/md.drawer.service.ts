import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";

@Injectable()
export class MdDrawerService {
  private _open$ = new BehaviorSubject<boolean>(false);

  toggle() {
    this._open$.next(!this._open$.getValue());
  }

  setOpen$(value: boolean) {
    this._open$.next(value);
  }

  getOpen$() {
    return this._open$.asObservable();
  }
}

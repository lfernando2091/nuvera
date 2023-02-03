import {EventEmitter, Injectable} from "@angular/core";

@Injectable()
export class MdDashboardLayoutService {
  private readonly _loading$: EventEmitter<boolean>;
  private _isLoading = false;

  constructor() {
    this._loading$ = new EventEmitter<boolean>;

  }

  get loading$() {
    return this._loading$;
  }
}

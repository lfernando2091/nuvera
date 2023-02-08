import {MdDrawerControllerService} from "./md.drawer-controller.service";
import {Observable, Subject} from "rxjs";

export class MdDrawerRefService<Result = any>{
  private _result$ = new Subject<Result | undefined>();

  constructor(
    private readonly controller: MdDrawerControllerService
  ) {
  }

  close(result?: Result) {
    this.controller.setReady$(false);
    this.controller.clear();
    this._result$.next(result);
    this._result$.complete();
  }

  afterClose(): Observable<Result | undefined> {
    return this._result$.asObservable();
  }
}

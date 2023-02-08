import {MdDrawerControllerService} from "./md.drawer-controller.service";
import {Observable} from "rxjs";

export class MdDrawerRefService<Result = any>{
  constructor(
    private controller: MdDrawerControllerService
  ) {
  }

  close(result?: Result) {
    this.controller.clearAndNotify(result);
  }

  afterClose(): Observable<Result | undefined> {
    return this.controller.result$();
  }
}

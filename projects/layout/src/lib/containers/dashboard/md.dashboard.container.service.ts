import {EventEmitter, Injectable} from "@angular/core";
import {ScreenView} from "./md.dashboard.container";

@Injectable()
export class MdDashboardContainerService {
  private readonly _screen$: EventEmitter<ScreenView>;
  private _screen: ScreenView;

  constructor() {
    this._screen$ = new EventEmitter<ScreenView>();
    this._screen = ScreenView.Normal;
  }

  get screen(): ScreenView {
    return this._screen;
  }

  set screen$(screen: ScreenView){
    this._screen = screen;
    this._screen$.emit(screen);
  }

  get eventScreen$(): EventEmitter<ScreenView> {
    return this._screen$;
  }
}

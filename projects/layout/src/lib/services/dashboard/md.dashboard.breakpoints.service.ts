import {Injectable} from "@angular/core";
import {BreakpointObserver} from "@angular/cdk/layout";
import {BehaviorSubject} from "rxjs";
import {ScreenView} from "../../models";

@Injectable()
export class MdDashboardBreakpointsService {
  private _screen$ = new BehaviorSubject<ScreenView>(ScreenView.Normal);
  private _drawer$ = new BehaviorSubject<boolean>(false);

  private smallWidth = '(max-width: 959.98px)';
  private normalWidth = '(min-width: 960px) and (max-width: 1534.98px)';
  private bigWidth = '(min-width: 1535px)';

  constructor(
    private breakpointObserver: BreakpointObserver
  ) {
    breakpointObserver.observe([
      this.smallWidth,
      this.normalWidth,
      this.bigWidth
    ]).subscribe((res) => {
      if (res.matches) {
        this._screen$.next(
          res.breakpoints[this.smallWidth] ?
            ScreenView.Small:
            res.breakpoints[this.normalWidth] ?
              ScreenView.Normal:
              res.breakpoints[this.bigWidth] ?
                ScreenView.Big: ScreenView.Normal
        );
        this.setDrawer(res.breakpoints[this.bigWidth]);
      }
    });
  }

  getDrawer$() {
    return this._drawer$.asObservable();
  }

  setDrawer(value: boolean) {
    this._drawer$.next(value);
  }

  setDrawerToggle() {
    this._drawer$.next(!this._drawer$.getValue());
  }

  getScreen$() {
    return this._screen$.asObservable();
  }
}

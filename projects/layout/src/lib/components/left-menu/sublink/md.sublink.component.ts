import {AfterViewInit, ChangeDetectionStrategy, Component, Input} from "@angular/core";
import {animate, state, style, transition, trigger} from "@angular/animations";
import {NavigationEnd, Router} from "@angular/router";
import {BehaviorSubject, filter} from "rxjs";
import {Links} from "../../../models";

@Component({
  selector: 'md-sublink',
  animations: [
    trigger('openClose', [
      state('open', style({ height: '*' })),
      state('closed', style({ height: 0 })),
      transition('open => closed', [
        animate('300ms cubic-bezier(0.2, 0, 0, 1)',
          style({ height: 0 })
        )
      ]),
      transition('closed => open', [
        style({ height: 0 }),
        animate('300ms cubic-bezier(0.2, 0, 0, 1)',
          style({ height: '*' })
        )
      ]),
    ]),
    trigger('inItem', [
      state('in', style({ })),
      transition('void => in', [
        style({ opacity: 0 }),
        animate('600ms cubic-bezier(0.2, 0, 0, 1)', style({ opacity: 1 })),
      ])
    ])
  ],
  template: `
    <ng-container *ngIf="{
        hasActiveUrl: hasActiveUrl$ | async,
        collapse: collapse$ | async
    } as vm">
      <ng-container *ngIf="link">
        <div [@inItem]="'in'" (click)="onToggleSubMenu()" class="collapse-item" [class.active]="vm.hasActiveUrl">
          <md-link-button disabled routerLinkActive="active">
            <mat-icon preIcon>{{ link.icon }}</mat-icon>
            <div label>{{ link.label }}</div>
            <mat-icon postIcon>{{ vm.collapse ? 'expand_more' : 'expand_less' }}</mat-icon>
          </md-link-button>
        </div>
        <div class="item-container" [@openClose]="vm.collapse ? 'closed' : 'open'">
          <div class="item-container">
            <a [@inItem]="'in'" *ngFor="let sublink of link.subLinks" class="item"
               [routerLink]="sublink.link" routerLinkActive="active">
              <md-link-button disabled routerLinkActive="active">
                <div label>{{ sublink.label }}</div>
              </md-link-button>
            </a>
          </div>
        </div>
      </ng-container>
    </ng-container>
  `,
  styleUrls: ["./md.sublink.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MdSublinkComponent implements AfterViewInit{
  @Input()
  link?: Links;

  hasActiveUrl$ = new BehaviorSubject<boolean>(false);
  collapse$ = new BehaviorSubject<boolean>(true);

  constructor(
    private router: Router
  ) {
    this.router.events
      .pipe(filter(r => r instanceof NavigationEnd))
      .subscribe((_event) => {
        this.checkActive();
      });
  }

  checkActive(autoClose = false) {
    if (this.link && this.link.subLinks) {
      const hasOne = this.link.subLinks.some((e) => this.hasActive(e.link));
      this.hasActiveUrl$.next(hasOne);
      if (hasOne) {
        this.openContent();
      } else if (autoClose) {
        this.closeContent();
      }
    }
  }

  hasActive(url: string) {
    return this.router.isActive(url,
      {
        paths: 'subset',
        queryParams: 'subset',
        fragment: 'ignored',
        matrixParams: 'ignored'
      });
  }

  onToggleSubMenu() {
    this.collapse$.next(!this.collapse$.getValue());
  }

  closeContent() {
    this.collapse$.next(true);
  }

  openContent() {
    this.collapse$.next(false);
  }

  ngAfterViewInit(): void {
    this.checkActive(true);
    // setTimeout(() => {
    //
    // }, 100);
  }
}

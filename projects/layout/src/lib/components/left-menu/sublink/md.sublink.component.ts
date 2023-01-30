import {AfterViewInit, Component, Input} from "@angular/core";
import {animate, state, style, transition, trigger} from "@angular/animations";
import {NavigationEnd, Router} from "@angular/router";
import {filter} from "rxjs";
import {Links} from "../nav-link/md.nav-link.model";

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
    <ng-template [ngIf]="link">
      <div [@inItem]="'in'" (click)="onToggleSubMenu()" class="collapse-item" [class.active]="hasActiveUrl">
        <md-link-button disabled routerLinkActive="active">
          <mat-icon preIcon>{{ link.icon }}</mat-icon>
          <div label>{{ link.label }}</div>
          <mat-icon postIcon>{{ rightIcon }}</mat-icon>
        </md-link-button>
      </div>
      <div class="item-container" [@openClose]="collapse ? 'closed' : 'open'">
        <div class="item-container">
          <a [@inItem]="'in'" *ngFor="let sublink of link.subLinks" class="item"
             [routerLink]="sublink.link" routerLinkActive="active">
            <md-link-button disabled routerLinkActive="active">
              <div label>{{ sublink.label }}</div>
            </md-link-button>
          </a>
        </div>
      </div>
    </ng-template>
  `,
  styleUrls: ["./md.sublink.component.scss"]
})
export class MdSublinkComponent implements AfterViewInit{

  @Input()
  link?: Links;

  hasActiveUrl = false;

  collapse = true;

  rightIcon = 'expand_more';

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
      this.hasActiveUrl = this.link.subLinks.some((e) => this.hasActive(e.link));
      if (this.hasActiveUrl) {
        this.openContent();
      } else if (autoClose) {
        this.closeContent();
      }
    }
  }

  hasActive(url?: string) {
    if (url) {
      return this.router.isActive(url,
        {
          paths: 'subset',
          queryParams: 'subset',
          fragment: 'ignored',
          matrixParams: 'ignored'
        });
    }
    return false;
  }

  onToggleSubMenu() {
    this.toggleContent(!this.collapse);
  }

  closeContent() {
    this.toggleContent(true);
  }

  openContent() {
    this.toggleContent(false);
  }

  toggleContent(collapse: boolean) {
    this.collapse = collapse;
    this.rightIcon = collapse ? 'expand_more': 'expand_less';
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.checkActive(true);
    }, 100);
  }
}

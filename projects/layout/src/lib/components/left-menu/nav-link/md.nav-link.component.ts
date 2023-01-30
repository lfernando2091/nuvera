import {Component, Input} from "@angular/core";
import {animate, state, style, transition, trigger} from "@angular/animations";
import {LinkSection} from "./md.nav-link.model";

@Component({
  selector: 'md-nav-link',
  animations: [
    trigger('inItem', [
      state('in', style({ })),
      transition('void => in', [
        style({ opacity: 0 }),
        animate('600ms cubic-bezier(0.2, 0, 0, 1)', style({ opacity: 1 })),
      ])
    ])
  ],
  template: `
    <ng-template [ngIf]="sections">
      <ng-template ngFor let-section [ngForOf]="sections">
        <ng-template [ngIf]="!section.links">
          <a [@inItem]="'in'" class="item" [routerLink]="section.link" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">
            <md-link-button disabled routerLinkActive="active">
              <mat-icon preIcon>{{ section.icon }}</mat-icon>
              <div label>{{ section.label }}</div>
            </md-link-button>
          </a>
        </ng-template>
        <ng-template [ngIf]="section.links">
          <div class="section-name">{{ section.label.toUpperCase() }}</div>
          <a [@inItem]="'in'" class="item" [routerLink]="section.link" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">
            <md-link-button disabled routerLinkActive="active">
              <mat-icon preIcon>apps</mat-icon>
              <div label>Menu</div>
            </md-link-button>
          </a>
          <ng-template ngFor let-sectLinks [ngForOf]="section.links">
            <ng-template [ngIf]="!sectLinks.subLinks">
              <a [@inItem]="'in'" class="item" [routerLink]="sectLinks.link" routerLinkActive="active">
                <md-link-button disabled routerLinkActive="active">
                  <mat-icon preIcon>{{ sectLinks.icon }}</mat-icon>
                  <div label>{{ sectLinks.label }}</div>
                </md-link-button>
              </a>
            </ng-template>
            <ng-template [ngIf]="sectLinks.subLinks">
              <md-sublink [link]="sectLinks"></md-sublink>
            </ng-template>
          </ng-template>
        </ng-template>
      </ng-template>
    </ng-template>
  `,
  styleUrls: ["./md.nav-link.component.scss"]
})
export class MdNavLinkComponent {
  @Input()
  sections?: LinkSection[];
}

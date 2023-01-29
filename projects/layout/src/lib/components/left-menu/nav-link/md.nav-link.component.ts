import {Component, Input} from "@angular/core";
import {animate, state, style, transition, trigger} from "@angular/animations";

export interface SubLinks {
  label: string;
  link: string;
}

export interface Links {
  label: string;
  icon: string;
  link?: string;
  subLinks?: SubLinks[];
}

export interface LinkSection {
  label: string;
  icon: string;
  link: string;
  links?: Links[];
}

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
          <a [@inItem]="'in'" class="item" [routerLink]="section.link" routerLinkActive="active">
            <md-link-button disabled routerLinkActive="active">
              <div label>{{ section.label }}</div>
            </md-link-button>
          </a>
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

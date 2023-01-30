import {Component, Input} from "@angular/core";
import { LinkSection } from "../nav-link/md.nav-link.model";

@Component({
  selector: 'md-rail-menu',
  template: `
    <nav class="links">
      <div class="top-btn">
        <ng-content select="[topButton]"></ng-content>
      </div>
      <ng-template [ngIf]="sections">
        <a *ngFor="let sect of sections" class="link-item"
           routerLinkActive="active"
           [routerLink]="sect.link">
          <mat-icon class="nav-icon-link">{{ sect.icon }}</mat-icon>
          <div class="nav-icon-label">{{ sect.label }}</div>
        </a>
      </ng-template>
    </nav>
    <div class="bottom-btn">
    </div>
  `,
  styleUrls: ["./md.rail-menu.component.scss"]
})
export class MdRailMenuComponent {
  @Input()
  sections?: LinkSection[];
}

import {ChangeDetectionStrategy, Component} from "@angular/core";

@Component({
  selector: 'md-link-button',
  template: `
    <button>
      <span class="pre-icon"><ng-content select="[preIcon]"></ng-content></span>
      <span class="label"><ng-content select="[label]"></ng-content></span>
      <span class="flex-content-view"><ng-content select="[flexContent]"></ng-content></span>
      <span class="post-icon"><ng-content select="[postIcon]"></ng-content></span>
    </button>
  `,
  styleUrls: ["./md.link-button.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MdLinkButtonComponent {

}

import {Component} from "@angular/core";

@Component({
  selector: 'md-account-info',
  template: `
    <a class="icon">
      <ng-content select="[logoIcon]"></ng-content>
    </a>
    <div class="content">
      <div class="info">
        <div class="name-business">
          <ng-content select="[titleName]"></ng-content>
        </div>
        <div class="role-name">
          <ng-content select="[roleName]"></ng-content>
        </div>
      </div>
      <div class="accounts-menu">
        <ng-content select="[accountMenu]"></ng-content>
      </div>
    </div>
  `,
  styleUrls: ["./md.account-info.component.scss"]
})
export class MdAccountInfoComponent {
}

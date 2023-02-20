import {ChangeDetectionStrategy, Component} from "@angular/core";

@Component({
  selector: 'app-login',
  template: `
    <md-one-column-layout>
      <router-outlet></router-outlet>
      <div footer>
        <h4>Footer</h4>
      </div>
    </md-one-column-layout>
  `,
  styleUrls: ["./login.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent {

}

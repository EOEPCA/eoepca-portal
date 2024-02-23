import {Component} from '@angular/core';
import {Environment} from "./environment.interface";

declare let __config: Environment;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'eoepca-portal';
}
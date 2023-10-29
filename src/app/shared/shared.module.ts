import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ButtonComponent, FooterComponent, IconButtonComponent, NavbarComponent} from './components';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {AngularSvgIconModule} from 'angular-svg-icon';
import {NgSelectModule} from '@ng-select/ng-select';
import {ClickOutsideDirective, AutofocusDirective} from './directives';
import {AlertComponent} from './components/alert/alert.component';
import { ElasticDirective } from './directives/elastic.directive';

@NgModule({
  declarations: [
    ButtonComponent,
    IconButtonComponent,
    NavbarComponent,
    FooterComponent,
    ClickOutsideDirective,
    AlertComponent,
    AutofocusDirective,
    ElasticDirective
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    AngularSvgIconModule,
    RouterModule
  ],
  exports: [
    FontAwesomeModule,
    NavbarComponent,
    FooterComponent,
    ButtonComponent,
    IconButtonComponent,
    IconButtonComponent,
    ButtonComponent,
    AlertComponent,
    AutofocusDirective,
    ElasticDirective
  ]
})
export class SharedModule {
}
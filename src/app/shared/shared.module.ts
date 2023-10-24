import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  ButtonComponent,
  IconButtonComponent,
  NavbarComponent,
  FooterComponent
} from './components';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { NgSelectModule } from '@ng-select/ng-select';
import { ClickOutsideDirective } from './directives';

@NgModule({
  declarations: [
    ButtonComponent,
    IconButtonComponent,
    NavbarComponent,
    FooterComponent,
    ClickOutsideDirective
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
  ]
})
export class SharedModule { }
import {APP_INITIALIZER, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {AngularSvgIconModule} from 'angular-svg-icon';
import {KeycloakAngularModule, KeycloakService} from 'keycloak-angular';

import {CoreModule, initializeKeycloak} from '@core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {MainLayoutComponent} from './features/main-layout/main-layout.component';
import {HomeComponent} from './features/home/home.component';
import {NgxJsonViewerModule} from 'ngx-json-viewer';
import {SharedModule} from "./shared";

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    HomeComponent
  ],
  imports: [
    CoreModule,
    BrowserModule,
    FontAwesomeModule,
    SharedModule,
    HttpClientModule,
    AngularSvgIconModule.forRoot(),
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    KeycloakAngularModule,
    NgxJsonViewerModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      multi: true,
      deps: [KeycloakService],
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
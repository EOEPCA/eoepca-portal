import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {

  isLoggedIn: boolean;
  userProfile: any;
  userRoles: string[];

  constructor(
    private keycloakService: KeycloakService,
    ) {}

  ngOnInit(): void {
    this.keycloakService.isLoggedIn().then(value => {
      this.isLoggedIn = value;
      if (this.isLoggedIn) {
        this.keycloakService.getKeycloakInstance().loadUserInfo().then(profile => {
          this.userProfile = profile;
          this.userRoles = this.keycloakService.getUserRoles();
        });
      }
    });
  }

  onLogin() {
    this.keycloakService.login().then(() => {
      this.isLoggedIn = true;
      this.keycloakService.getKeycloakInstance().loadUserInfo().then(profile => {
        this.userProfile = profile;
        this.userRoles = this.keycloakService.getUserRoles();
      });
    });
  }

  onLogout() {
    this.keycloakService.logout().then(() => {
      this.isLoggedIn = false;
      this.userProfile = undefined;
    });
  }

  // NOTE: for now this will grant access to any logged in user. In the future, this will be changed to only allow
  // the appropriate role(s)
  get hasServiceProviderRole() {
    return this.userRoles && this.userRoles.length > 0;
  }
}
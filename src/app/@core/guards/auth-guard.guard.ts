import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot
} from '@angular/router';
import { KeycloakAuthGuard, KeycloakService } from 'keycloak-angular';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard extends KeycloakAuthGuard {
  constructor(
    protected readonly route: Router,
    protected readonly keycloak: KeycloakService
  ) {
    super(route, keycloak);
  }

  public async isAccessAllowed(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) {
    // Force the user to log in if currently unauthenticated.
    if (!this.authenticated) {
      await this.keycloak.login({
        redirectUri: window.location.origin + state.url
      });
    }

    // Get the roles required from the route.
    const requiredRoles = route.data['roles'];

    // Allow the user to proceed if no additional roles are required to access the route.
    if (!Array.isArray(requiredRoles) || requiredRoles.length === 0) {
      return true;
    }

    // Allow the user to proceed if all the required roles are present.
    // const isUserAllowed =  requiredRoles.every((role) => this.roles.includes(role));

    // NOTE: for now we only check for authentication and not for roles. This will be changed in a future version.
    const isUserAllowed = true;
    if (isUserAllowed) {
        return true;
    } else {
        this.route.navigateByUrl('/' + route.data['redirectTo']);
        return false;
    }
  }
}
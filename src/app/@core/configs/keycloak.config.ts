import {KeycloakEvent, KeycloakService} from "keycloak-angular";
import {environment} from '../../../environments/environment';
import Keycloak from "keycloak-js";

export function initializeKeycloak(keycloak: KeycloakService) {
  keycloak.keycloakEvents$.subscribe({
    next(event: KeycloakEvent) {
      keycloak.isLoggedIn().then(loggedIn => {
        if (!loggedIn) {
          const expirationDate: Date = new Date(0);
          document.cookie = `${environment.cookies.accessToken.name}=; expires=${expirationDate.toUTCString()}; path=/; domain=${environment.cookies.accessToken.domain}; SameSite=Stric`;
          document.cookie = `${environment.cookies.refreshToken.name}=; expires=${expirationDate.toUTCString()}; path=/; domain=${environment.cookies.refreshToken.domain}; SameSite=Stric`;
        } else {
          const keycloakInstance: Keycloak = keycloak.getKeycloakInstance();
          const accessToken: string = keycloakInstance?.token;
          if (accessToken && accessToken !== '') {
            document.cookie = `${environment.cookies.accessToken.name}=${accessToken}; expires=Session; path=/; domain=${environment.cookies.accessToken.domain}; SameSite=Strict`;
          }
          const refreshToken: string = keycloakInstance?.refreshToken;
          if (refreshToken && refreshToken !== '') {
            document.cookie = `${environment.cookies.refreshToken.name}=${refreshToken}; expires=Session; path=/; domain=${environment.cookies.refreshToken.domain}; SameSite=Strict`;
          }
        }
      })
    }
  });
  return () =>
    keycloak.init({
      config: {
        url: environment.identity.url,
        realm: environment.identity.realm,
        clientId: environment.identity.clientId
      },
      initOptions: {
        onLoad: 'check-sso'
      }
    }).catch(onReject => console.error(onReject));
}
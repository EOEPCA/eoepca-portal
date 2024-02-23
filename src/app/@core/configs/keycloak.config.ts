import {KeycloakEvent, KeycloakService} from "keycloak-angular";
import Keycloak from "keycloak-js";
import {Environment} from "../../environment.interface";

declare let config: Environment;

export function initializeKeycloak(keycloak: KeycloakService) {
  keycloak.keycloakEvents$.subscribe({
    next(event: KeycloakEvent) {
      keycloak.isLoggedIn().then(loggedIn => {
        if (!loggedIn) {
          const expirationDate: Date = new Date(0);
          document.cookie = `${config.cookies.accessToken.name}=; expires=${expirationDate.toUTCString()}; path=/; domain=${config.cookies.accessToken.domain}; SameSite=Stric`;
          document.cookie = `${config.cookies.refreshToken.name}=; expires=${expirationDate.toUTCString()}; path=/; domain=${config.cookies.refreshToken.domain}; SameSite=Stric`;
        } else {
          const keycloakInstance: Keycloak = keycloak.getKeycloakInstance();
          const accessToken: string = keycloakInstance?.token;
          if (accessToken && accessToken !== '') {
            document.cookie = `${config.cookies.accessToken.name}=${accessToken}; expires=Session; path=/; domain=${config.cookies.accessToken.domain}; SameSite=Strict`;
          }
          const refreshToken: string = keycloakInstance?.refreshToken;
          if (refreshToken && refreshToken !== '') {
            document.cookie = `${config.cookies.refreshToken.name}=${refreshToken}; expires=Session; path=/; domain=${config.cookies.refreshToken.domain}; SameSite=Strict`;
          }
        }
      })
    }
  });
  return () =>
    keycloak.init({
      config: {
        url: config.identity.url,
        realm: config.identity.realm,
        clientId: config.identity.clientId,
      },
      initOptions: {
        onLoad: 'check-sso',
        scope: 'openid'
      }
    }).catch(onReject => console.error(onReject));
}
import {KeycloakEvent, KeycloakService} from "keycloak-angular";
import {environment} from '../../../environments/environment';

export function initializeKeycloak(keycloak: KeycloakService) {
  keycloak.keycloakEvents$.subscribe({
    next(event: KeycloakEvent) {
      keycloak.isLoggedIn().then(loggedIn => {
        if (!loggedIn) {
          const expirationDate: Date = new Date(0);
          document.cookie = `${environment.cookies.token.name}=; expires=${expirationDate.toUTCString()}; path=/`;
        } else {
          const token: string = keycloak.getKeycloakInstance().token;
          if (token && token !== '') {
            document.cookie = `${environment.cookies.token.name}=${token}; path=/; domain=${environment.cookies.token.domain}; expires=Session; SameSite=Strict`;
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
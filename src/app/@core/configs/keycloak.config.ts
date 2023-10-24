import { KeycloakService } from "keycloak-angular";
import { environment } from '../../../environments/environment';

export function initializeKeycloak(keycloak: KeycloakService) {
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

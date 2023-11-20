// TODO: not defined yet
export const environment = {
  production: true,
  staging: false,
  develop: false,
  demo: false,
  identity: {
    url: 'https://identity.keycloak.eoepca.org',
    realm: 'master',
    clientId: 'eoepca-portal'
  },
  api: 'https://identity.api.eoepca.org',
  links: {
    keycloak: "https://identity.keycloak.eoepca.org/admin/master/console",
    identityApi: "https://identity.api.eoepca.org",
    ades: "https://ades.eoepca.org/admin/wps3/processes",
    systemResourceCatalogue: "https://resource-catalogue.eoepca.org",
    systemDataAccess: "https://data-access.eoepca.org",
    workspace: "https://workspace-api.eoepca.org",
    containerRegistry: "https://harbor.eoepca.org",
    dummyService: "https://identity.dummy-service.eoepca.org",
  },
  cookies: {
    accessToken: {
      name: 'auth_user_id',
      domain: '.eoepca.org'
    },
    refreshToken: {
      name: 'auth_refresh_token',
      domain: '.eoepca.org'
    }
  }
};
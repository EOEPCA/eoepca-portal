export const environment = {
  production: false,
  staging: false,
  develop: false,
  demo: true,
  identity: {
    url: 'https://identity.keycloak.demo.eoepca.org',
    realm: 'master',
    clientId: 'eoepca-portal'
  },
  api: 'https://identity.api.demo.eoepca.org',
  links: {
    keycloak: "https://identity.keycloak.demo.eoepca.org/admin/master/console",
    identityApi: "https://identity.api.demo.eoepca.org",
    ades: "https://ades.demo.eoepca.org/admin/wps3/processes",
    systemResourceCatalogue: "https://resource-catalogue.demo.eoepca.org",
    systemDataAccess: "https://data-access.demo.eoepca.org",
    workspace: "https://workspace-api.demo.eoepca.org",
    containerRegistry: "https://harbor.demo.eoepca.org",
    dummyService: "https://identity.dummy-service.demo.eoepca.org",
  },
  cookies: {
    accessToken: {
      name: 'auth_user_id',
      domain: '.demo.eoepca.org'
    },
    refreshToken: {
      name: 'auth_refresh_token',
      domain: '.demo.eoepca.org'
    }
  }
};
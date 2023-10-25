// TODO: not defined yet
export const environment = {
  production: true,
  staging: false,
  develop: false,
  demo: false,
  identity: {
    url: 'https://identity.keycloak.eoepca.org',
    realm: 'demo',
    clientId: 'eoepca-portal'
  },
  api: 'https://identity.api.eoepca.org',
  links: {
    keycloak: "https://identity.keycloak.eoepca.org",
    identityApi: "https://identity.api.eoepca.org",
    ades: "https://ades.eoepca.org/admin/wps3/processes",
    systemResourceCatalogue: "https://resource-catalogue.eoepca.org",
    systemDataAccess: "https://data-access.eoepca.org",
    workspace: "https://workspace-api.eoepca.org/docs#",
    containerRegistry: "https://harbor.eoepca.org",
    dummyService: "https://identity.dummy-service.eoepca.org",
  }
};
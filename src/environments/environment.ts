export const environment = {
  production: false,
  staging: false,
  develop: false,
  demo: false,
  identity: {
    url: 'https://identity.keycloak.develop.eoepca.org',
    realm: 'master',
    clientId: 'eoepca-portal'
  },
  api: 'http://localhost:5566',
  links: {
    keycloak: "https://identity.keycloak.develop.eoepca.org",
    identityApi: "https://identity.api.develop.eoepca.org",
    ades: "https://ades.develop.eoepca.org/admin/wps3/processes",
    systemResourceCatalogue: "https://resource-catalogue.develop.eoepca.org",
    systemDataAccess: "https://data-access.develop.eoepca.org",
    workspace: "https://workspace-api.develop.eoepca.org/docs#",
    containerRegistry: "https://harbor.develop.eoepca.org",
    dummyService: "https://identity.dummy-service.develop.eoepca.org",
  }
};
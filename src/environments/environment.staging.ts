// TODO: Not defined yet.
export const environment = {
  production: false,
  staging: true,
  develop: false,
  demo: false,
  identity: {
    url: 'https://identity.keycloak.staging.eoepca.org',
    realm: 'master',
    clientId: 'eoepca-portal'
  },
  api: 'https://identity.api.staging.eoepca.org',
  links: {
    identityService: "https://identity.keycloak.staging.eoepca.org",
    identityApi: "https://identity.api.staging.eoepca.org",
    ades: "https://ades.staging.eoepca.org/admin/wps3/processes",
    systemResourceCatalogue: "https://resource-catalogue.staging.eoepca.org",
    systemDataAccess: "https://data-access.staging.eoepca.org",
    workspace: "https://workspace-api.staging.eoepca.org/docs#",
    containerRegistry: "https://harbor.staging.eoepca.org",
    dummyService: "https://identity.dummy-service.staging.eoepca.org",
  }
};
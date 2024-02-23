export interface Environment {
  identity: {
    url: string,
    realm: string,
    clientId: string,
  },
  urls: {
    identityApi: string,
    ades: string,
    resourceCatalogue: string,
    dataAccess: string,
    workspace: string,
    workspaceDocs: string,
    imagesRegistry: string,
    dummyService: string,
  },
  cookies: {
    accessToken: {
      name: string,
      domain: string
    },
    refreshToken: {
      name: string,
      domain: string
    }
  }
}
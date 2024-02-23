const config = {
    identity: {
        url: '$IDENTITY_URL',
        realm: '$REALM',
        clientId: '$CLIENT_ID',
    },
    urls: {
        identityApi: '$IDENTITY_API_URL',
        ades: '$ADES_URL',
        resourceCatalogue: '$RESOURCE_CATALOGUE_URL',
        dataAccess: '$DATA_ACCESS_URL',
        workspace: '$WORKSPACE_URL',
        workspaceDocs: '$WORKSPACE_DOCS_URL',
        imagesRegistry: '$IMAGES_REGISTRY_URL',
        dummyService: '$DUMMY_SERVICE_URL',
    },
    cookies: {
        accessToken: {
            name: '$ACCESS_TOKEN_NAME',
            domain: '$ACCESS_TOKEN_DOMAIN'
        },
        refreshToken: {
            name: '$REFRESH_TOKEN_NAME',
            domain: '$ACCESS_TOKEN_DOMAIN'
        }
    }
}
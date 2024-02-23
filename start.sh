#!/bin/sh

sed -i \
-e "s/\$IDENTITY_URL/$(echo "$IDENTITY_URL" | sed 's/\//\\\//g')/g" \
-e "s/\$REALM/$(echo "$REALM" | sed 's/\//\\\//g')/g" \
-e "s/\$CLIENT_ID/$(echo "$CLIENT_ID" | sed 's/\//\\\//g')/g" \
-e "s/\$IDENTITY_API_URL/$(echo "$IDENTITY_API_URL" | sed 's/\//\\\//g')/g" \
-e "s/\$ADES_URL/$(echo "$ADES_URL" | sed 's/\//\\\//g')/g" \
-e "s/\$RESOURCE_CATALOGUE_URL/$(echo "$RESOURCE_CATALOGUE_URL" | sed 's/\//\\\//g')/g" \
-e "s/\$DATA_ACCESS_URL/$(echo "$DATA_ACCESS_URL" | sed 's/\//\\\//g')/g" \
-e "s/\$WORKSPACE_URL/$(echo "$WORKSPACE_URL" | sed 's/\//\\\//g')/g" \
-e "s/\$WORKSPACE_DOCS_URL/$(echo "$WORKSPACE_DOCS_URL" | sed 's/\//\\\//g')/g" \
-e "s/\$IMAGES_REGISTRY_URL/$(echo "$IMAGES_REGISTRY_URL" | sed 's/\//\\\//g')/g" \
-e "s/\$DUMMY_SERVICE_URL/$(echo "$DUMMY_SERVICE_URL" | sed 's/\//\\\//g')/g" \
-e "s/\$ACCESS_TOKEN_NAME/$(echo "$ACCESS_TOKEN_NAME" | sed 's/\//\\\//g')/g" \
-e "s/\$ACCESS_TOKEN_DOMAIN/$(echo "$ACCESS_TOKEN_DOMAIN" | sed 's/\//\\\//g')/g" \
-e "s/\$REFRESH_TOKEN_NAME/$(echo "$REFRESH_TOKEN_NAME" | sed 's/\//\\\//g')/g" \
-e "s/\$REFRESH_TOKEN_DOMAIN/$(echo "$REFRESH_TOKEN_DOMAIN" | sed 's/\//\\\//g')/g" \
/usr/share/nginx/html/config/config.js

echo "Starting with configuration:"
cat /usr/share/nginx/html/config/config.js

nginx -g "daemon off;"
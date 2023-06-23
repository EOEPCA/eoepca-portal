FROM --platform=$BUILDPLATFORM node:20.3.0-bullseye-slim as builder

RUN mkdir /app
WORKDIR /app

# To Fix Permissions for Packages
RUN npm config set unsafe-perm true

RUN npm install -g @angular/cli@13

COPY --chown=node:node package.json package-lock.json ./
RUN npm ci

COPY . .
CMD ["ng", "serve", "--host", "0.0.0.0"]

FROM builder as dev-envs

RUN apt-get update && apt-get install -y --no-install-recommends git

RUN useradd -s /bin/bash -m vscode && groupadd docker && usermod -aG docker vscode
# install Docker tools (cli, buildx, compose)
COPY --from=gloursdocker/docker / /

CMD ["ng", "serve", "--host", "0.0.0.0"]
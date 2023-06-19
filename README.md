# Identity Manager

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.0.

## Development server

Run development server: 
```shell
ng serve
``` 
Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

To generate a new componente: 
```shell
ng generate component component-name
``` 
You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Build the project with:
```shell
npm install
ng build
``` 
The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Execute unit tests via [Karma](https://karma-runner.github.io):
```shell
ng test
```

## Running end-to-end tests

Execute end-to-end tests via a platform of your choice:
```shell
ng e2e
``` 

To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Running with Docker

```shell
docker build . -t identity-manager:latest
docker run --rm -dp 4200:4200 --name identity-manager identity-manager:latest
```

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

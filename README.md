<!--
***
*** To avoid retyping too much info. Do a search and replace for the following:
*** um-identity-manager
-->

<!-- PROJECT SHIELDS -->
<!--
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
![Build][build-shield]

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/EOEPCA/um-identity-manager">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">um-identity-manager</h3>

  <p align="center">
    Web application using AngularJS and Angular Material to visually interact with the Identity. 
    Interacts with Identity API.
    <br />
    <a href="https://github.com/EOEPCA/um-identity-manager"><strong>Explore the docs »</strong></a>
    <br />
    <a href="https://github.com/EOEPCA/um-identity-manager">View Demo</a>
    ·
    <a href="https://github.com/EOEPCA/um-identity-manager/issues">Report Bug</a>
    ·
    <a href="https://github.com/EOEPCA/um-identity-manager/issues">Request Feature</a>
  </p>
</p>

## Table of Contents

- [Table of Contents](#table-of-contents)
- [About The Project](#about-the-project)
  - [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Code scaffolding](#code-scaffolding)
  - [Build](#build)
  - [Running unit tests](#running-unit-tests)
  - [Running end-to-end tests](#running-end-to-end-tests)
  - [Running with Docker](#running-with-docker)
  - [Further help](#further-help)
- [Documentation](#documentation)
- [Usage](#usage)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)
- [Acknowledgements](#acknowledgements)

<!-- ABOUT THE PROJECT -->

## About The Project

Web application using AngularJS and Angular Material to visually interact with the Identity.  
Interacts with Identity API.

### Built With

- [AngularJS](https://angularjs.org/) + [Angular Material](https://material.angular.io/)

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.

- [Docker](https://www.docker.com/)
- [Python](https://www.python.org//)

### Installation

1. Get into EOEPCA's development environment

```sh
vagrant ssh
```

3. Clone the repo

```sh
git clone https://github.com/EOEPCA/um-identity-managergit
```

4. Change local directory

```sh
cd um-identity-manager
```

5. Run development server

```sh
npm install
ng serve
```
Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

### Code scaffolding

To generate a new componente:
```shell
ng generate component component-name
``` 
You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Build the project with:
```shell
npm install
ng build
``` 
The build artifacts will be stored in the `dist/` directory.

Build the production Docker image with:
```shell
ng build --configuration=production
docker build . -f Dockerfile.production -t identity-manager:production
```
Run with:
```shell
docker run --rm -dp 4200:80 --name identity-manager identity-manager:production
```

### Running unit tests

Execute unit tests via [Karma](https://karma-runner.github.io):
```shell
ng test
```

### Running end-to-end tests

Execute end-to-end tests via a platform of your choice:
```shell
ng e2e
``` 

To use this command, you need to first add a package that implements end-to-end testing capabilities.

### Running with Docker

```shell
docker build . -t um-identity-manager
docker run --rm -dp 4200:4200 --name um-identity-manager um-identity-manager
```

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Documentation

The component documentation can be found at https://eoepca.github.io/um-identity-manager/.

<!-- USAGE EXAMPLES -->

## Usage

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

_For more examples, please refer to the [Documentation](https://example.com)_

<!-- ROADMAP -->

## Roadmap

See the [open issues](https://github.com/EOEPCA/um-identity-manager/issues) for a list of proposed features (and known issues).

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- LICENSE -->

## License

Distributed under the Apache-2.0 License. See `LICENSE` for more information.

## Contact

[EOEPCA mailbox](eoepca.systemteam@telespazio.com)

Project Link: [https://github.com/EOEPCA/um-identity-manager](https://github.com/EOEPCA/um-identity-manager)

## Acknowledgements

- README.md is based on [this template](https://github.com/othneildrew/Best-README-Template) by [Othneil Drew](https://github.com/othneildrew).


[contributors-shield]: https://img.shields.io/github/contributors/EOEPCA/um-identity-managersvg?style=flat-square
[contributors-url]: https://github.com/EOEPCA/um-identity-manager/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/EOEPCA/um-identity-managersvg?style=flat-square
[forks-url]: https://github.com/EOEPCA/um-identity-manager/network/members
[stars-shield]: https://img.shields.io/github/stars/EOEPCA/um-identity-managersvg?style=flat-square
[stars-url]: https://github.com/EOEPCA/um-identity-manager/stargazers
[issues-shield]: https://img.shields.io/github/issues/EOEPCA/um-identity-managersvg?style=flat-square
[issues-url]: https://github.com/EOEPCA/um-identity-manager/issues
[license-shield]: https://img.shields.io/github/license/EOEPCA/um-identity-managersvg?style=flat-square
[license-url]: https://github.com/EOEPCA/um-identity-manager/blob/master/LICENSE
[build-shield]: https://www.travis-ci.com/EOEPCA/um-identity-managersvg?branch=master

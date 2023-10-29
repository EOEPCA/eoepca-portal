import {Component} from '@angular/core';
import {faLink} from "@fortawesome/free-solid-svg-icons";
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {IconDefinition} from "@fortawesome/fontawesome-svg-core";
import {FormControl, FormGroup} from "@angular/forms";
import {parseJson} from "@angular/cli/src/utilities/json-file";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private http: HttpClient) {
  }

  protected readonly faLink: IconDefinition = faLink;
  protected requestUri: string = null;
  protected requestBody: string = null;
  protected selectedService: string = null;
  protected selectedMethod: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH' | 'OPTIONS' | 'TRACE' | 'HEAD' = 'GET';
  protected jsonData: any;
  protected data: string;
  protected isAlertVisible: boolean = false;
  protected error: string;
  protected errorMessage: string = null;
  protected loading: boolean = false;

  getKeycloakLink() {
    return environment.links.keycloak;
  }

  getIdentityApiLink() {
    return environment.links.identityApi;
  }

  getAdesLink() {
    return environment.links.ades;
  }

  getSystemResourceCatalogueLink() {
    return environment.links.systemResourceCatalogue;
  }

  getSystemDataAccessLink() {
    return environment.links.systemDataAccess;
  }

  getWorkspaceLink() {
    return environment.links.workspace;
  }

  getWorkspaceDocsLink() {
    return environment.links.workspace + "/docs#";
  }

  getContainerRegistryLink() {
    return environment.links.containerRegistry;
  }

  getDummyServiceLink() {
    return environment.links.dummyService;
  }

  callService() {
    this.data = null;
    this.jsonData = null;
    this.error = null;
    this.errorMessage = null;
    this.loading = false;
    if (!this.selectedService) {
      return;
    }
    let body = this.requestBody;
    if (this.selectedMethod !== 'POST' && this.selectedMethod !== 'PUT') {
      body = null;
    }
    if (body) {
      try {
        JSON.parse(body);
      } catch (e) {
        this.errorMessage = "Invalid JSON";
        this.error = "Invalid JSON.";
        this.showAlert();
       return;
      }
    }
    this.loading = true;
    const url = this.selectedService + (this.requestUri ? "/" + this.requestUri : "");
    if (this.selectedService.includes("dummy-service") || this.selectedService.includes("workspace")) {
      this.http.request(this.selectedMethod, url, {responseType: 'text', body: body})
        .subscribe({
          next: (v) => {
            this.data = v;
            this.jsonData = null;
          },
          error: (e) => {
            console.error(e);
            this.loading = false;
            this.error = e.message;
            this.errorMessage = this.getErrorMessage(e);
            this.showAlert();
          },
          complete: () => this.loading = false,
        })
    } else {
      this.http.request(this.selectedMethod, url, {responseType: 'json', body: this.requestBody})
        .subscribe({
          next: (v) => {
            this.jsonData = v;
            this.data = null;
          },
          error: (e) => {
            console.error(e);
            this.loading = false;
            this.error = e.message;
            this.errorMessage = this.getErrorMessage(e);
            this.showAlert();
          },
          complete: () => this.loading = false,
        })
    }
  }

  private showAlert() {
    if (this.isAlertVisible) {
      return;
    }
    this.isAlertVisible = true;
    setTimeout(() => this.isAlertVisible = false, 5000);
  }

  private getErrorMessage(error: any) {
    const statusCode = error.status;
    let statusText = error.statusText;
    if (statusText === 'OK') {
      switch (statusCode) {
        case 400:
          if (error.error.errors) {
            const errors = [];
            for (const key in error.error.errors) {
              if (error.error.errors[key]) {
                errors.push(error.error.errors[key])
              }
            }
            throw errors.flat();
          } else if (typeof (error.error) === 'object') {
            statusText = "Bad Request";
          }
          break;
        case 401:
          statusText = "Unauthorised";
          break;
        case 403:
          statusText = "Forbidden";
          break;
        case 404:
          statusText = "Not Found";
          break;
        case 500:
          statusText = "Server Error";
          break;
        default:
          break;
      }
    }
    if (!statusCode && !statusText) {
      return null;
    }
    if (statusCode == 0) {
      return statusText;
    }
    return statusCode + " " + statusText;
  }

}
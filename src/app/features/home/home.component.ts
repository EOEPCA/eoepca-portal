import { Component } from '@angular/core';
import {faLink} from "@fortawesome/free-solid-svg-icons";
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  protected readonly faLink = faLink;

  getKeycloakLink(){
    return environment.links.keycloak;
  }

  getIdentityApiLink(){
    return environment.links.identityApi;
  }

  getAdesLink(){
    return environment.links.ades;
  }

  getSystemResourceCatalogueLink(){
    return environment.links.systemResourceCatalogue;
  }

  getSystemDataAccessLink(){
    return environment.links.systemDataAccess;
  }
  getWorkspaceLink(){
    return environment.links.workspace;
  }

  getContainerRegistryLink(){
    return environment.links.containerRegistry;
  }

  getDummyServiceLink(){
    return environment.links.dummyService;
  }

}
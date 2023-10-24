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

  getIdentityService(){
    return environment.links.identityService;
  }

  getIdentityApi(){
    return environment.links.identityApi;
  }

  getAdes(){
    return environment.links.ades;
  }

  getSystemResourceCatalogue(){
    return environment.links.systemResourceCatalogue;
  }

  getSystemDataAccess(){
    return environment.links.systemDataAccess;
  }
  getWorkspace(){
    return environment.links.workspace;
  }

  getContainerRegistry(){
    return environment.links.containerRegistry;
  }

  getDummyService(){
    return environment.links.dummyService;
  }

}
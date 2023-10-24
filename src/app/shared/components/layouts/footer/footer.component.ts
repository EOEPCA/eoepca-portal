import { Component, Input, OnInit } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import { MenuItem } from '@core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  
  @Input() menuItems: MenuItem[] = []
  @Input() secondaryMenuItems: MenuItem[] = [];

  env = environment;

  constructor() {}

  ngOnInit(): void {

  }


}

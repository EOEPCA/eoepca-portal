import {Component, Input, OnInit} from '@angular/core';
import {MenuItem} from '@core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {

  @Input() menuItems: MenuItem[] = []
  @Input() secondaryMenuItems: MenuItem[] = [];

  constructor() {
  }

  ngOnInit(): void {

  }


}
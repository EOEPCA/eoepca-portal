import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent {
  @Input() visible = false;
  @Input() type: "info" | "danger" | "success" | "warning" | "dark" = "dark";
  @Input() title: string;
  @Input() message: string;
}
import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';
import {faQuestionCircle, faSignInAlt, faSignOutAlt, faTimes, faUser} from '@fortawesome/free-solid-svg-icons';
import * as pkg from '../../../../../../package.json';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({transform: 'translateX(100%)'}),
        animate('200ms ease-in', style({transform: 'translateX(0%)'})),
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({transform: 'translateX(100%)'})),
      ]),
    ])
  ]
})
export class NavbarComponent implements OnInit, OnDestroy {

  @Input() isAuthenticated: boolean | null = false;
  @Input() userProfile: any;
  @Output() login = new EventEmitter();
  @Output() logout = new EventEmitter();

  constructor() {
  }

  faUser = faUser;
  signOutIcon = faSignOutAlt;
  close = faTimes;
  signIn = faSignInAlt;
  questionIcon = faQuestionCircle;
  pkg = pkg;

  componentDestroyed$ = new Subject<boolean>();

  ngOnInit(): void {

  }

  ngOnDestroy(): void {
    this.componentDestroyed$.next(true);
    this.componentDestroyed$.complete();
  }

  onLogin(): void {
    this.login.emit();
  }

  onLogout(): void {
    this.logout.emit();
  }

  getInitials(name: string): string {
    const initials = name.split(' ');
    if (initials.length >= 2) {
      return (
        initials[0].charAt(0).toUpperCase() +
        initials[1].charAt(0).toUpperCase()
      );
    } else {
      return initials[0].charAt(0).toUpperCase();
    }
  }

  getUserData() {
    return this.userProfile;
  }

  protected readonly JSON = JSON;
}
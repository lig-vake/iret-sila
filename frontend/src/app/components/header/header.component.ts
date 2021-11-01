import { Component, HostBinding } from '@angular/core';
import {trigger, state, style, animate, transition} from '@angular/animations';

@Component({
  selector: 'app-header',
  animations: [
    trigger('openClose', [
      state('open', style({
        transform: 'scaleY(100%) translateY(0)',
        opacity: 1,
      })),

      state('closed', style({
        transform: 'scaleY(0) translateY(-20px)',
        opacity: 0,
      })),

      transition('open => closed', [
        animate('200ms ease-in-out'),
      ]),

      transition('closed => open', [
        animate('200ms ease-in-out')
      ]),
    ])
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  isOpen = false;

  toggle() {
    this.isOpen = !this.isOpen;
  }

  constructor() { }

}

import {AfterViewInit, Component, OnInit, ViewChild, ComponentFactoryResolver, ViewContainerRef} from '@angular/core';
import { Router } from '@angular/router';
import {PersonalInformationComponent} from "./personal-information/personal-information.component";
import {SettingsComponent} from "./settings/settings.component";
import {PurchaseHistoryComponent} from "./purchase-history/purchase-history.component";

@Component({
  selector: 'app-lk',
  templateUrl: './lk.component.html',
  styleUrls: ['./lk.component.css']
})
export class LkComponent {
  curComponent: string = 'lk';
  constructor(private router: Router) {
    switch (router.url) {
      case '/lk/settings':
        this.curComponent = 'settings';
        break;
      case '/lk/purchase-history':
        this.curComponent = 'purchase-history';
        break;
    }
  }
}

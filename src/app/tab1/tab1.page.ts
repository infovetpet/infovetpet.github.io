import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
//import { IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { triangle, ellipse, square, pawOutline, medkitOutline, logoWhatsapp, footballOutline, fastFoodOutline } from 'ionicons/icons';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent],
})
export class Tab1Page {
  constructor() {
    addIcons({ triangle, ellipse, square, pawOutline, medkitOutline, logoWhatsapp, footballOutline, fastFoodOutline });
  }
}

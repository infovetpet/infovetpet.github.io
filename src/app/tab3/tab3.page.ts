import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, /* IonItem, IonTextarea */ IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonGrid, IonRow, IonCol } from '@ionic/angular/standalone';
import { IonIcon, IonFab, IonFabButton } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { add } from 'ionicons/icons';
import { triangle, ellipse, square, pawOutline, medkitOutline, logoWhatsapp, footballOutline, fastFoodOutline } from 'ionicons/icons';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonIcon, IonFab, IonFabButton, IonGrid, IonRow, IonCol],
})
export class Tab3Page {
  constructor() {
    addIcons({ triangle, ellipse, square, pawOutline, medkitOutline, logoWhatsapp, footballOutline, fastFoodOutline, add });
  }
}
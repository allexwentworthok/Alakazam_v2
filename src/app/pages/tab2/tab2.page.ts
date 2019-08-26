import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';

 @Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor() {

     
    
    
  }

  closeApp() {
    const route = 'app';
       navigator[route].exitApp();
     }
 
}
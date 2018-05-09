import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Plugins } from '@capacitor/core';
const { Browser } = Plugins;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  url = 'https://akhromieiev.com';
  
  constructor(public navCtrl: NavController) {

  }

  async openURL(url){
    await Browser.open({'url': url});
  }
}

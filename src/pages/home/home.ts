import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import leaflet from 'leaflet';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild('map') mapContainer: ElementRef;
  map: any;
  constructor(public navCtrl: NavController) {
 
  }
 
  ionViewDidEnter() {
    this.loadmap();
  }
 
  loadmap() {
    this.map = leaflet.map("map").fitWorld();
    leaflet.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attributions: 'www.tphangout.com',
      maxZoom: 60
    }).addTo(this.map);
    this.map.locate({
      setView: true,
      maxZoom: 10
    }).on('locationfound', (e) => {
      console.log('found you');
      })
  }

}

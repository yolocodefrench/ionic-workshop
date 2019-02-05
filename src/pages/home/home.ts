import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { App, MenuController } from 'ionic-angular';
import leaflet from 'leaflet';
import { PlaceProvider } from '../../providers/place-getter';
import { PlaceComponent} from '../../components/place/place';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage{
  @ViewChild('map') mapContainer: ElementRef;
  map: any;
  places :PlaceComponent[];
  constructor( menu: MenuController, private navCtrl: NavController, private placeProvider: PlaceProvider) {
    menu.enable(true);
  }
  ionViewDidEnter() {
    this.loadmap();
    let places : Promise<PlaceComponent[]> = this.placeProvider.getAllPlaces();
    places.then((data:any) =>{
      this.places = data;
      this.places.forEach(e => {
        console.log(e)
        leaflet.marker([e.latitude, e.longitude],{
          icon: new leaflet.DivIcon({
              className: 'my-div-icon',
              html: '<img src="assets/imgs/point.svg" />'+
                    '<span class="my-div-span">'+e.name+'</span>'
          })}).addTo(this.map);
      });
    }).catch((error:Error ) =>{

    });
    
    

  }
 
  loadmap() {
    this.map = leaflet.map("map").fitWorld();
    leaflet.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attributions: 'www.tphangout.com',
      maxZoom: 60
    }).addTo(this.map);
    /*
    this.map.locate({
      setView: true,
      maxZoom: 11
    }).on('locationfound', (e) => {
      
      }).on('locationerror', (e) => {
        console.log('didn\'t found you');
      })*/
  }

  markerOnClick(){
  }

  loadPlace(id){

  }

}

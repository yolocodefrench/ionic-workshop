import { Component } from '@angular/core';

/**
 * Generated class for the PlaceComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'place',
  templateUrl: 'place.html'
})
export class PlaceComponent {

  description: string;
  latitude: number;
  longitude: number;
  image: string;
  nom: string;

  constructor(description, latitude, longitude, image, nom) {
    this.description = description;
    this.latitude = latitude;
    this.longitude = longitude;
    this.image = image;
    this.nom = nom;
  }

}

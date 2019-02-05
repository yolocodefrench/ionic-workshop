import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ToastController } from 'ionic-angular';
import { PlaceComponent } from '../components/place/place';
import { UserComponent } from '../components/user/user';

/*
  Generated class for the MovieGetterProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PlaceProvider {
    constructor(public httpClient : HttpClient, private toastCtrl: ToastController) {
        this.getAllPlaces();
    }
    getAllPlaces() : Promise<PlaceComponent[]>{

        return new Promise((resolve, reject) =>{
            let requestText = 'http://52.174.57.238/api/locations';
            var request = this.httpClient.get(requestText)

            request.subscribe(
                (data: any) => {  
                    resolve(data)
                },
                (error: Error) =>{
                    reject(error);
                })
        })
        
    }

    login() :Promise<UserComponent>{
        const httpOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded'}),
          };
        return new Promise((resolve, reject) => {
            let requestText = 'http://52.174.57.238/login';
            var request = this.httpClient.post(requestText,"email=admin%40gmail.com&password=admin", httpOptions);

            console.log(request);

            request.subscribe(
                (data: any) => {  
                    resolve(data)
                },
                (error: Error) =>{
                    reject(error);
                })
        })
    }
}
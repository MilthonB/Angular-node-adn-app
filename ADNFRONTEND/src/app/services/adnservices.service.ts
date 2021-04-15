import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ADNServicesService {

  constructor(private adn: HttpClient) { }


  getAdn(){
    return this.adn.get('https://app-node-adn-app.herokuapp.com/api/list');
  }

  getStatus(){
    return this.adn.get('https://app-node-adn-app.herokuapp.com/api/stats');
  }
}

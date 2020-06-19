import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class PcDataService {

  private url = `https://kol2tai.herokuapp.com`;

    constructor(private http: HttpClient) {
}

  getAllItems() {
    return this.http.get(`${this.url}/api/shop/items`);
  }
  getItemById(id) {
    return this.http.get(`${this.url}/api/shop/items/:id`);
  }
}


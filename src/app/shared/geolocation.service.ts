import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment'


@Injectable({
  providedIn: 'root'
})
export class GeolocationService {
  public baseURL = 'https://maps.googleapis.com/maps/api/geocode/json?latlng='
  public API_KEY: string = environment.GM_KEY;

  country: Observable<any>;

  constructor(private http: HttpClient) {
  }

  getLocationObject(latitude: number, longitude: number): Observable<any> {
      this.country = this.http.get(this.baseURL + latitude + ',' + longitude + '&key=' + this.API_KEY)
      return this.country;
  }
}
import { Injectable, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CountryService {
  public baseURL = 'https://restcountries.eu/rest/v2/';
  public allCountries = 'all'
  public searchByName = 'name/'

  countries: Observable<any>;

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<any> {
      this.countries = this.http.get(this.baseURL + this.allCountries);
      return this.countries;
  }

  getByName(name: string): Observable<any> {
      return this.http.get(this.baseURL + this.searchByName + name + '?fulltext=true')
  }
  
}
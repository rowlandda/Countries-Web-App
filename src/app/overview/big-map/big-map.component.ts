import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { GeolocationService } from '../../shared/geolocation.service'
import { CountryService } from 'src/app/shared/countries.service';

@Component({
  selector: 'app-big-map',
  templateUrl: './big-map.component.html',
  styleUrls: ['./big-map.component.css']
})
export class BigMapComponent implements OnInit {
  country: any;
  allCountries: any;
  @Output() clickedCountry: EventEmitter<any> = new EventEmitter();

  constructor(private geolocationService: GeolocationService, private countriesService: CountryService) { }

  ngOnInit() {
  }

  emitCountry(event: any) {
    let latitude: number = event.coords.lat;
    let longitude: number = event.coords.lng;
    this.geolocationService.getLocationObject(latitude, longitude).subscribe( (locale) => {
      const countryName: string = locale.results[locale.results.length - 1].formatted_address;//look up google geolocation response to understand this
      this.countriesService.getAll().subscribe( (countries) => {
        this.allCountries = countries;
        this.country = this.allCountries.find( (element) => {
          return element.name === countryName;
        })
        this.clickedCountry.emit(this.country);
      });
    });
  }

  getCountryByName(name: string) {

  }

}

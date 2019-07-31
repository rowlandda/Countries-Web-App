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
      let countryName: string = locale.results[locale.results.length - 1].formatted_address;//look up google geolocation response to understand this
      countryName = this.sanitizeCountryName(countryName);
      console.log(countryName);
      this.countriesService.getAll().subscribe( (countries) => {
        this.allCountries = countries;
        this.country = this.allCountries.find( (element) => {
          return element.name === countryName;
        });
        //final round of error handling.  if sanitize didn't work loosen the search criteria
        if (this.country === undefined) {
          this.country = this.allCountries.find( (element) => {
            return element.name.includes(countryName);
          });
        }
        this.clickedCountry.emit(this.country);
      });
    });
  }

  //some of the geocode countries names aren't the same as the restcountry name
  //quick fix for now.  best option is to switch to alphacode for everything
  sanitizeCountryName(name: string): string {
    if (name === 'United States') {
      return 'United States of America';
    }
    else if (name === 'South Korea') {
      return 'Korea (Republic of)';
    }
    else {
      return name;
    }
  }

}

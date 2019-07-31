import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { CountryService } from '../shared/countries.service'

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit {
  countries: { name: string }[];
  modifiedCountryList: any;
  searchString: string = '';
  @Output() selectedCountry: EventEmitter<any> = new EventEmitter();

  constructor(private countryService: CountryService) { }

  ngOnInit() {
    this.countryService.getAll().subscribe( (countries) => {
      this.countries = countries;
    });
  }

  updateCountryList(searchTerm: string){
    this.modifiedCountryList = this.countries.filter( (country) => {
      return country.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
  }

  changeSelectedCountry(country: any) {
    this.selectedCountry.emit(country);
  }
}

import { Component, OnInit } from '@angular/core';
import { CountryService } from '../shared/countries.service'

@Component({
  selector: 'app-top10',
  templateUrl: './top10.component.html',
  styleUrls: ['./top10.component.css']
})
export class Top10Component implements OnInit {

  allCountries: any;
  topByPopulation: any;
  topByArea: any;
  selectedPage: string = 'population'

  constructor(private countryService: CountryService ) { }

  ngOnInit() {
    this.countryService.getAll().subscribe( (countries) => {
      this.allCountries = countries;
      this.topByPopulation = this.getByPopulationList(this.allCountries);
      this.topByArea = this.getByAreaList(this.allCountries);
    })
  }

  changeSelectedPage(page: string) {
    this.selectedPage = page;
  }

  getByPopulationList(countries: any): [] {
    if (this.allCountries.length > 0) {
      this.topByPopulation = Array.from(countries);
      this.topByPopulation.sort( function(a,b){
        return b.population - a.population
      })
    }
    const top10: any = [];
    for (let i = 0; i < 10; i++) {
      top10[i] = this.topByPopulation[i];
    }
    return top10;
  }

  getByAreaList(countries: any): [] {
    if (this.allCountries.length > 0) {
      this.topByArea = Array.from(countries);
      this.topByArea.sort( function(a,b){
        return b.area - a.area
      })
    }
    const top10: any = [];
    for (let i = 0; i < 10; i++) {
      top10[i] = this.topByArea[i];
    }
    return top10;
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'countries-website';
  selectedCountry: any;
  selectedPage: string;

  ngOnInit() {
    this.selectedCountry = {name: 'unselected'}
  }

  changeSelectedCountry(country: any) {
    this.selectedCountry = country;
  }

  changeSelectedPage(page: string) {
    this.selectedPage = page;
  }
}

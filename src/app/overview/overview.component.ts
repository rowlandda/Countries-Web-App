import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit, OnChanges{

  @Input() currentCountry: any;
  @Output() clickedCountry: EventEmitter<any> = new EventEmitter();
  latitude: number;
  longitude: number;
  zoom: number = 8;//google maps zoom goes from 1(furthest out) to 20(closest to ground)

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    if (this.currentCountry.latlng){//checks if country has been selected
      this.zoom = this.getZoom(this.currentCountry.area);     
      this.latitude = this.currentCountry.latlng[0];
      this.longitude = this.currentCountry.latlng[1];
    }
  }

  emitClickedCountry(event: any) {
    this.clickedCountry.emit(event);
  }

  getZoom(size: number) {//lots of magic numbers here.
    if (size > 10000000) {//eventually need to come up with a function to turn area to zoom level
      return 2;
    }
    else if (size > 5000000) {
      return 3;
    }
    else if (size > 1500000) {
      return 4;
    }
    else if (size > 50000) {
      return 5;
    }
    else if (size > 20000) {
      return 6;
    }
    else if (size > 6500) {
      return 7;
    }
    else if (size > 200) {
      return 8;
    }
    else {
      return 9;
    }
  }

}

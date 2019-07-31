import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-top10-header',
  templateUrl: './top10-header.component.html',
  styleUrls: ['./top10-header.component.css']
})
export class Top10HeaderComponent implements OnInit {
  selectedPage: string;
  @Output() pageEmitter: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.selectedPage = 'population'
    this.pageEmitter.emit(this.selectedPage);
  }

  changeToPopulation() {
    this.selectedPage = 'population'
    this.pageEmitter.emit(this.selectedPage);
  }

  changeToArea() {
    this.selectedPage = 'area'
    this.pageEmitter.emit(this.selectedPage);
  }

}

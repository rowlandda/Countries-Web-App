import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  selectedPage: string;
  @Output() pageEmitter: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.selectedPage = 'overview';
    this.pageEmitter.emit(this.selectedPage);
  }

  changeToAbout() {
    this.selectedPage = 'about';
    this.pageEmitter.emit(this.selectedPage);
  }

  changeToOverview() {
    this.selectedPage = 'overview';
    this.pageEmitter.emit(this.selectedPage);
  }

  changeToTop10() {
    this.selectedPage = 'top10';
    this.pageEmitter.emit(this.selectedPage);
  }

  

}

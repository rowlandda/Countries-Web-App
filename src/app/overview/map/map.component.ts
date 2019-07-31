import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent{
  @Input() latitude: number;
  @Input() longitude: number;
  @Input() zoom: number;
}

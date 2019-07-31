import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CountryListComponent } from './country-list/country-list.component';
import { OverviewComponent } from './overview/overview.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { MapComponent } from './overview/map/map.component'

import { AgmCoreModule } from '@agm/core';
import { environment } from 'src/environments/environment';
import { Top10Component } from './top10/top10.component';
import { Top10HeaderComponent } from './top10/top10-header/top10-header.component';
import { BigMapComponent } from './overview/big-map/big-map.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CountryListComponent,
    OverviewComponent,
    AboutPageComponent,
    MapComponent,
    Top10Component,
    Top10HeaderComponent,
    BigMapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: environment.GM_KEY
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

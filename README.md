## Countries of the World Web App

This project was created using Angular 8 and Bootstrap.  It consumes a public API from [restcountries.eu](https://restcountries.eu), and the semi-public [Geocode API](https://developers.google.com/maps/documentation/geocoding/) and Maps [Javascript API](https://developers.google.com/maps/documentation/javascript/) from Google.

## Installation

To run this app locally you need to have [Node.js](https://nodejs.org/en/download/), the Node.js package manager [`npm`](https://www.npmjs.com/package/npm), [Angular CLI](https://cli.angular.io/), and a [Google Maps API key](https://developers.google.com/maps/documentation/javascript/get-api-key).  Extract the files from the repo into a local directory.  Navigate to that directory in your terminal and run `npm install` to install all the dependencies.  Next run `npm install bootstrap`.  Then `npm i @agm/core` for the Angular Google Maps dependency.  Then edit `srs/environments/environment.ts` and insert your Google Maps API key where indicated.  Finally run `ng serve` to run a server on your machine and go to http://localhost:4200/ to view the app.

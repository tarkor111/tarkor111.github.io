import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Countries } from '../models/countries';

@Injectable({
  providedIn: 'root'
})
export class ListCountriesService {
  httpOptions = {
    headers: new HttpHeaders({
      'X-RapidAPI-Key': '0a83e848e8mshe0477d46cde4ac7p180993jsn813f039b57fb',
      'X-RapidAPI-Host': 'countries-cities.p.rapidapi.com'
    })
  };

  constructor(private http: HttpClient) { }

  getListOfCountries() {
    return this.http.get<Countries>("https://countries-cities.p.rapidapi.com/location/country/list", this.httpOptions)
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CountryDetails } from '../models/country-details';
@Injectable({
  providedIn: 'root'
})
export class CountryDetailsService {
  httpOptions = {
    headers: new HttpHeaders({
      'X-RapidAPI-Key': '0a83e848e8mshe0477d46cde4ac7p180993jsn813f039b57fb',
      'X-RapidAPI-Host': 'countries-cities.p.rapidapi.com'
    })
  };

  constructor(private http: HttpClient) { }

  getCountryDetails(countryCode:string) {
    return this.http.get<CountryDetails>(`https://countries-cities.p.rapidapi.com/location/country/${countryCode}`, this.httpOptions)
  }
}

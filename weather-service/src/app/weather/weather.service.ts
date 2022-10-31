import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WeatherRoot } from '../models/weather/weather-root';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  headers = new HttpHeaders({
    'X-RapidAPI-Key': '0a83e848e8mshe0477d46cde4ac7p180993jsn813f039b57fb',
    'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
  });

  constructor(private http: HttpClient) {}

  getCurrentWeather(address: string) {
    let params = new HttpParams().set('q', address);
    return this.http.get<WeatherRoot>(
      'https://weatherapi-com.p.rapidapi.com/current.json',
      { params: params, headers: this.headers }
    );
  }
}

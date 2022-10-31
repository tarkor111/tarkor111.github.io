import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
})
export class WeatherComponent implements OnInit {
  text = new FormControl('', [Validators.required]);
  weatherData = ''

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {}

  getErrorMessage() {
    console.log('here');
    if (this.text.hasError('required')) {
      return 'You must enter a value';
    } else {
      return '';
    }
  }

  showWeather() {
  this.weatherService.getCurrentWeather(this.text.value!!)
  .subscribe((data: string) => {

    this.weatherData = data
    console.log(data)
  });
  }
}

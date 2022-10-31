import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  text = new FormControl('', [Validators.required]);

  constructor() { }

  ngOnInit(): void {
  }

  getErrorMessage() {
    console.log("here")
    if (this.text.hasError('required')) {
      return 'You must enter a value';
    } else {
      return '';
    }
  }
}

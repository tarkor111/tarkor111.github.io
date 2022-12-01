import { Component, OnInit } from '@angular/core';
import { Countries } from '../models/countries';
import { ListCountriesService } from './list-countries.service';

@Component({
  selector: 'app-list-countries',
  templateUrl: './list-countries.component.html',
  styleUrls: ['./list-countries.component.css']
})
export class ListCountriesComponent implements OnInit {
  listOfCountries:object = {}

  constructor(private listOfCountriesService: ListCountriesService) { }

  ngOnInit(): void {

    this.listOfCountriesService.getListOfCountries()
    .subscribe((data: Countries) => {

      this.listOfCountries = data.countries
    });
  }

}


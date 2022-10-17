import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { CountryDetails } from '../models/country-details';
import { CountryDetailsService } from './country-details.service';
@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.css'],
})
export class CountryDetailsComponent implements OnInit {
  countryCode: string = '';
  countryDetails: CountryDetails|null = null

  constructor(private route: ActivatedRoute, private router: Router, private countryDetailsService: CountryDetailsService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      (params: ParamMap) => (this.countryCode = params.get('code')!)
    );
    this.countryDetailsService.getCountryDetails(this.countryCode)
    .subscribe((data: CountryDetails) => {

      this.countryDetails = data;
    });
  }
}

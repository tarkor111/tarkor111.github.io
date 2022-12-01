import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountryDetailsComponent } from './country-details/country-details.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ListCountriesComponent } from './list-countries/list-countries.component';
import { WeatherComponent } from './weather/weather.component';

const routes: Routes = [
  { path: 'list-countries', component: ListCountriesComponent },
  { path: 'country/:code', component: CountryDetailsComponent },
  { path: '', component: HomepageComponent },
  { path: 'weather', component: WeatherComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

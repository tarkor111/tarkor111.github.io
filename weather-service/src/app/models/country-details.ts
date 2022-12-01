export interface CountryDetails {
  geonameid: number;
  name: string;
  code: string;
  area_size: string;
  population: number;
  phone_code: string;
  currency: Currency
}
export interface Currency {
code: string,
name: string

}

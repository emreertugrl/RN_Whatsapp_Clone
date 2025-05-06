interface Country {
  id: number;
  code: string;
  country: string;
}
interface CountryiesTypes {
  countries: Country[];
  selectedCountry: Country;
  pendingCountryCode: boolean;
  phoneNumber: string;
}
export type {Country, CountryiesTypes};

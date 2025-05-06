interface Country {
  id: number;
  code: string;
  country: string;
}
interface CountryiesTypes {
  name: string;
  surname: string;
  phoneNumber: string;
  selectedCountry: Country;
  pendingCountryCode: boolean;
  countries: Country[];
  navigation?: any;
}
export type {Country, CountryiesTypes};

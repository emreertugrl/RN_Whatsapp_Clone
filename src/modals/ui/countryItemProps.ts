interface Country {
  id: number;
  code: string;
  country: string;
}
interface CountryItemProps {
  item: Country;
}
export type {Country, CountryItemProps};

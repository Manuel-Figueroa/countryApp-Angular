import { Country } from "./country";
import { Region } from "./region.type";

export interface CacheStore{
  byCapital:TermCountries;
  byCountries:TermCountries;
  byRegion:RegionCountries;
}

export interface TermCountries{
  terms:string;
  countries:Country[];
}

export interface RegionCountries{
  region:Region;
  countries:Country[];
}

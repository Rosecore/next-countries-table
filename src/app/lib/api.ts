import { transformBackendCountryData } from "./helpers";
import { Country } from "./types";

export async function getCountries(): Promise<Country[]> {
  const res = await fetch(
    "https://gist.githubusercontent.com/sanchezzzhak/8606e9607396fb5f8216/raw/39de29950198a7332652e1e8224f988b2e94b166/ISO3166_RU.json"
  );
  const data = await res.json();
  return transformBackendCountryData(data);
}

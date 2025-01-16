"use client";
import React, { useState } from "react";
import CountryRow from "../components/CountryRow";
import { Country } from "../lib/types";
import "@/app/styles/countriesTable.css";

type CountriesTableProps = {
  countriesData: Country[];
};

const CountriesTable = ({ countriesData }: CountriesTableProps) => {
  const [countries, setCountries] = useState(countriesData);

  const removeCountry = (isoCode3: string) => {
    setCountries(prev => prev.filter(country => country.isoCode3 !== isoCode3));
  };

  return (
    <div className="table-container">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Название</th>
            <th scope="col">Код</th>
            <th scope="col">Флаг</th>
            <th scope="col">Действия</th>
          </tr>
        </thead>
        <tbody>
          {countries?.map(country => (
            <CountryRow
              key={country.isoCode3}
              country={country}
              onDelete={removeCountry}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CountriesTable;

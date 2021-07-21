

import { useState, useEffect } from "react";
import axios from "axios";

import React from "react";
import ContactCards from "./components/CountryListCard";
import Navbar from './components/Navbar'

export default function App() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    axios
      .get("https://restcountries.eu/rest/v2/all")
      // .then((response) => console.log(response.data));
      .then((response) => setCountries(response.data));
  }, []);

  return (
     
    <div className={"bg-gray-100 pt-3"}>
      <Navbar />
      <section className={"grid sm:grid-cols-2 md:grid-cols-4 gap-6 p-20"}>
      {countries.map((country) => {
        return (
          
          <ContactCards
            name={country.name}
            capital={country.capital}
            flag={country.flag}
            language={country.languages[0].name}
          />
        );
      })}
      
      </section>
    </div>
  );
}

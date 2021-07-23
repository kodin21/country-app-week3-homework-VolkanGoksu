import { useState, useEffect } from "react";
import axios from "axios";
import "./components/index.css";
import React from "react";
import ContactCards from "./components/CountryListCard";
import Navbar from "./components/Navbar";
import Statictics from "./components/Statictics";

export default function App() {
  const [countries, setCountries] = useState([]);
  const [contryLanguages, setContryLanguages] = useState([]);
  const [countryStatictsVisible, setCountryStatictsVisible] = useState(true);

  useEffect(() => {
    axios
      .get("https://restcountries.eu/rest/v2/all")
      // .then((response) => console.log(response.data));
      // .then((response) => setCountries(response.data));
      .then((res) => {
        var countryList = res.data;
        setCountries(countryList);
        var allLanguages = [];
        var languages = res.data.map((c) => c.languages);
        languages.forEach((language) => {
          allLanguages = [...allLanguages, ...language];
        });

        var distinctLanguageArray = [];
        allLanguages.forEach((language) => {
          var existLanguage = distinctLanguageArray.filter(
            (l) => l.name == language.name
          );
          if (!existLanguage.length) {
            distinctLanguageArray.push({ name: language.name, count: 0 });
          }
        });

        distinctLanguageArray.forEach((distinctLanguage) => {
          countryList.forEach((country) => {
            var countryLanguages = country.languages;
            var languageCount = countryLanguages.filter(
              (countryLanguage) => countryLanguage.name == distinctLanguage.name
            );

            if (languageCount.length)
              distinctLanguage.count = distinctLanguage.count + 1;
          });
        });

        distinctLanguageArray = distinctLanguageArray.sort((a, b) => {
          if (a.count > b.count) return -1;
          else return 1;
        });

        setContryLanguages(distinctLanguageArray.splice(0, 10));
      });
  }, []);

  // const getCountryList = () => {
  //   axios
  //     .get("https://restcountries.eu/rest/v2/all")
  //     .then((response) => setCountries(response.data));
  // };

  const handleClick = (key) => {
    setCountryStatictsVisible(key === "countrys" ? true : false);
  };
  return (
    <div className={"bg-gray-100 "}>
      <div className="flex justify-center pt-3 ">
        <button
          onClick={() => handleClick("countrys")}
          className="focus:outline-none focus:ring focus:border-blue-300  bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded
          "
        >
          Country List
        </button>
        
        <button
          onClick={() => handleClick("staticts")}
          className="mx-8 focus:outline-none focus:ring focus:border-blue-300  bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded
         "
        >
          Statistics
        </button>
      </div>
      <Navbar />
      {/* <Statictics contryStatics={contryLanguages}/> */}
      <div className="flex justify-center">
   
        {countryStatictsVisible ? (
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
        ) : (
          <Statictics contryStatics={contryLanguages} />
        )}
      </div>
    </div>
  );
}

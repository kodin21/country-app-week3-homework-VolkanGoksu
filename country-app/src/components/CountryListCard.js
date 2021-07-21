
const CountryListCard = ({ name, flag, capital, language }) => {
    return (
      <>
        <figure className="bg-white text-white h-80 rounded-lg shadow-md">
          <img
            alt="user"
            className="w-32 h-32 rounded-full mx-auto mt-7"
            src={flag}
          />
          <figcaption className="text-center mt-5">
            <p className="text-gray-700 font-semibold text-xl mb-2">
              {name} 
            </p>
            <p className="text-gray-500">
              <span className="font-medium">Capital: </span>
               {capital}
            </p>
            <p className="text-gray-500">
              <span className="font-medium">Language: </span>
              {language}
            </p>
            <p className="text-gray-500">
              <span className="font-medium">City: </span>
              {name}
            </p>
          </figcaption>
        </figure>
      </>
    );
  };
  
  export default CountryListCard
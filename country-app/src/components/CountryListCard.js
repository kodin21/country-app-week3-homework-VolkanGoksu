import React, { useState } from "react";

import Modal from "react-modal";
import { BsArrowReturnRight } from "react-icons/bs";

const CountryListCard = ({ name, flag, capital, language }) => {
  const [isOpen, setIsOpen] = useState(false);
  function toggleModal() {
    setIsOpen(!isOpen);
  }
  return (
    <>
      <figure
        onClick={toggleModal}
        className="bg-white text-white h-60 rounded-lg shadow-md  cursor-pointer"
      >
        <img
          alt="user"
          className="w-32 h-32 rounded-full mx-auto mt-7"
          src={flag}
        />
        <figcaption className="text-center mt-5">
          <p className="text-gray-700 font-semibold text-xl mb-2">{name}</p>
        </figcaption>

        <Modal
          isOpen={isOpen}
          onRequestClose={toggleModal}
          contentLabel="My dialog"
          className="fixed inset-0 bg-black opacity-90"
          overlayClassName="top-0 left-0 right-0 bottom-0 position: fixed bg-black-500"
          closeTimeoutMS={500}
        >
          <div class="relative px-4 min-h-screen md:flex md:items-center md:justify-center">
            <div class="bg-black opacity-25 w-full h-full absolute z-10 inset-0" />
            <div class="bg-white rounded-lg md:max-w-md md:mx-auto p-4 fixed inset-x-0 bottom-0 z-50 mb-4 mx-4 md:relative">
              <div class="md:flex items-center">
                <div class="rounded-full border border-gray-300 flex items-center justify-center w-16 h-16 flex-shrink-0 mx-auto">
                  <img
                    className="rounded-full border border-gray-300 flex items-center justify-center w-16 h-16 flex-shrink-0 mx-auto"
                    src={flag}
                    alt="flag"
                  />
                </div>
                <div class="mt-4 md:mt-0 md:ml-6 text-center md:text-left">
                  <p class="font-bold">
                    <span className="font-medium">Country : </span> {name}
                  </p>
                  <p class="text-sm text-gray-700 mt-1 ">
                    <span className="font-medium">Capital : {capital} </span>
                  </p>
                  <p class="text-sm text-gray-700 mt-1 ">
                    <span className="font-medium">Language : {language} </span>
                  </p>
                </div>
              </div>
              <div class="text-center md:text-right mt-4 md:flex md:justify-end">
                <button
                  class="block w-full md:inline-block md:w-auto px-4 py-3 md:py-2 bg-gray-200 rounded-lg font-semibold text-sm mt-4
          md:mt-0 md:order-1"
                >
                  <BsArrowReturnRight />
                </button>
              </div>
            </div>
          </div>
        </Modal>
      </figure>
    </>
  );
};

export default CountryListCard;

import {
  Apples,
  Amazons,
  EsteeLauder,
  Headings,
  AppHeading,
} from "./contextProvider";
import React, { useState } from "react";

const Vendor = ({}) => {
  const [apples, setApples] = useState(true);
  const [amazons, setAmazons] = useState(true);
  const [beautyBrand, setBeautyBrand] = useState(true);

  const toggleAmazon = () => {
    setAmazons(!amazons);
  };

  const toggleApple = () => {
    setApples(!apples);
  };

  const toggleBeautyBrand = () => {
    setBeautyBrand(!beautyBrand);
  };

  return (
    <div>
      <div className="overflow-x-auto relative mt-16 ">
        <table className="w-full text-sm text-left text-gray-500 ">
          <thead className="text-xs text-grey2 uppercase bg-[#DDDDDD] ">
            <tr>
              {Headings.map((heading) => (
                <th key={heading.id} scope="col" className="py-3 px-6">
                  {heading.title}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {/* Apple */}
            <tr onClick={toggleApple} className="bg-white border-b ">
              <th
                scope="row"
                className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap"
              >
                Apple
              </th>
              <td className="py-4 px-6">4 apps</td>
              <td className="py-4 px-6">$100.999</td>
              <td className="py-4 px-6">Inactive</td>
              <td className="py-4 px-6">EXPENSIFY</td>
              <td className="py-4 px-6">$1</td>
            </tr>
            {/* Applications */}

            <tr
              className={`w-full bg-purple2 p-2 md:p-3  px-5 md:px-10 ${
                apples ? "hidden" : "null"
              }`}
            >
              {AppHeading.map((heading) => (
                <th
                  key={heading.id}
                  scope="row"
                  className="py-4 px-6 font-bold text-xs text-grey2 uppercase bg-[#DDDDDD]  whitespace-nowrap "
                >
                  {heading.title}
                </th>
              ))}
            </tr>
            {Apples.map((apple) => (
              <tr
                key={apple.id}
                className={`w-full bg-purple2 p-2 md:p-3  px-5 md:px-10 ${
                  apples ? "hidden" : "null"
                }`}
              >
                <th
                  scope="row"
                  className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap "
                >
                  {apple.title}
                </th>
                <td className="py-4 px-6">{apple.vendor}</td>
                <td className="py-4 px-6">{apple.category}</td>
                <td className="py-4 px-6">-</td>
                <td className="py-4 px-6">{apple.contract}</td>
                <td className="py-4 px-6">{apple.payment}</td>
              </tr>
            ))}
            {/* Amazon */}
            <tr onClick={toggleAmazon} className="bg-white border-b ">
              <th
                scope="row"
                className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap"
              >
                Amazon
              </th>
              <td className="py-4 px-6">10 apps</td>
              <td className="py-4 px-6">$10.999</td>
              <td className="py-4 px-6">Active</td>
              <td className="py-4 px-6">BOOKS</td>
              <td className="py-4 px-6">$10</td>
            </tr>

            {/* Applications */}
            <tr
              className={`w-full bg-purple2 p-2 md:p-3  px-5 md:px-10 ${
                amazons ? "hidden" : "null"
              }`}
            >
              {AppHeading.map((heading) => (
                <th
                  key={heading.id}
                  scope="row"
                  className="py-4 px-6 font-bold text-xs text-grey2 uppercase bg-[#DDDDDD]  whitespace-nowrap "
                >
                  {heading.title}
                </th>
              ))}
            </tr>
            {Amazons.map((amazon) => (
              <tr
                key={amazon.id}
                className={`w-full bg-purple2 p-2 md:p-3  px-5 md:px-10 ${
                  amazons ? "hidden" : "null"
                }`}
              >
                <th
                  scope="row"
                  className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap "
                >
                  {amazon.title}
                </th>
                <td className="py-4 px-6">{amazon.vendor}</td>
                <td className="py-4 px-6">{amazon.category}</td>
                <td className="py-4 px-6">-</td>
                <td className="py-4 px-6">{amazon.contract}</td>
                <td className="py-4 px-6">{amazon.payment}</td>
              </tr>
            ))}

            {/* EsteeLauder */}
            <tr onClick={toggleBeautyBrand} className="bg-white border-b ">
              <th
                scope="row"
                className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap"
              >
                Estee Lauder
              </th>
              <td className="py-4 px-6">20 apps</td>
              <td className="py-4 px-6">$1000.999</td>
              <td className="py-4 px-6">Active</td>
              <td className="py-4 px-6">Beauty</td>
              <td className="py-4 px-6">$1000</td>
            </tr>

            {/* Applications */}
            <tr
              className={`w-full bg-purple2 p-2 md:p-3  px-5 md:px-10 ${
                beautyBrand ? "hidden" : "null"
              }`}
            >
              {AppHeading.map((heading) => (
                <th
                  key={heading.id}
                  scope="row"
                  className="py-4 px-6 font-bold text-xs text-grey2 uppercase bg-[#DDDDDD]  whitespace-nowrap "
                >
                  {heading.title}
                </th>
              ))}
            </tr>
            {EsteeLauder.map((beauty) => (
              <tr
                key={beauty.id}
                className={`w-full bg-purple2 p-2 md:p-3  px-5 md:px-10 ${
                  beautyBrand ? "hidden" : "null"
                }`}
              >
                <th
                  scope="row"
                  className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap "
                >
                  {beauty.title}
                </th>
                <td className="py-4 px-6">{beauty.vendor}</td>
                <td className="py-4 px-6">{beauty.category}</td>
                <td className="py-4 px-6">-</td>
                <td className="py-4 px-6">{beauty.contract}</td>
                <td className="py-4 px-6">{beauty.payment}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Vendor;

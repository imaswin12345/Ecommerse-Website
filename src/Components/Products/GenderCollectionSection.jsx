import React from "react";
import MensCollection from "../assets/mens-collection.webp";
import WomensCollection from "../assets/womens-collection.webp";
import { Link } from "react-router-dom";

const GenderCollectionSection = () => {
  return (
    <section className="py-16 px-4 lg:px-0 bg-gray-100">
      <div className="container mx-auto flex flex-col md:flex-row gap-8">
        
        {/* Women's Collection */}
        <div className="relative flex-1 overflow-hidden group">
          <img
            src={WomensCollection}
            alt="womens collection"
            className="w-full h-[700px] object-cover transform group-hover:scale-105 transition duration-500"
          />
          <div className="absolute bottom-8 left-8 bg-white/90 p-6 rounded">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Women's Collection
            </h2>
            <Link
              to="/collection/all?gender=women"
              className="text-gray-900 underline hover:text-gray-600 transition"
            >
              Shop Now
            </Link>
          </div>
        </div>

        {/* Men's Collection */}
        <div className="relative flex-1 overflow-hidden group">
          <img
            src={MensCollection}
            alt="mens collection"
            className="w-full h-[700px] object-cover transform group-hover:scale-105 transition duration-500"
          />
          <div className="absolute bottom-8 left-8 bg-white/90 p-6 rounded">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Men's Collection
            </h2>
            <Link
              to="/collection/all?gender=men"
              className="text-gray-900 underline hover:text-gray-600 transition"
            >
              Shop Now
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};

export default GenderCollectionSection;

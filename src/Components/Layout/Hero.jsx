import React from "react";
import heroImg from "../assets/rabbit-hero.webp";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative">
      <img
        src={heroImg}
        alt="rabbit"
        className="w-full h-[400px] md:h-[600px] lg:h-[750px] object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
        <div className="text-center text-white p-6">
          <h1 className="text-4xl md:text-8xl font-bold tracking-tighter uppercase mb-4 leading-tight">
            Vacation <br /> Ready <br /> Outfits
          </h1>
          <p className="text-sm md:text-lg mb-6">
            Explore Our Vacation-Ready Outfits with Fast Worldwide Shipping
          </p>
          <Link
            to="/products"
            className="bg-white text-gray-800 px-6 py-3 rounded text-lg font-semibold hover:bg-gray-100 transition duration-300"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import React, { useRef, useEffect, useState, useCallback } from 'react';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const NewArrival = () => {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  const newarrival = [
    {
      id: "1",
      name: "Stylish Jacket",
      price: 120,
      image: [{ url: "https://picsum.photos/500/500?random=1", altText: "Stylish Jacket" }]
    },
    {
      id: "2",
      name: "Stylish Jacket",
      price: 420,
      image: [{ url: "https://picsum.photos/500/500?random=2", altText: "Stylish Jacket" }]
    },
    {
      id: "3",
      name: "Stylish Jacket",
      price: 420,
      image: [{ url: "https://picsum.photos/500/500?random=3", altText: "Stylish Jacket" }]
    },
    {
      id: "4",
      name: "Stylish Jacket",
      price: 120,
      image: [{ url: "https://picsum.photos/500/500?random=4", altText: "Stylish Jacket" }]
    },
    {
      id: "5",
      name: "Stylish Jacket",
      price: 120,
      image: [{ url: "https://picsum.photos/500/500?random=5", altText: "Stylish Jacket" }]
    },
    {
      id: "6",
      name: "Stylish Jacket",
      price: 127,
      image: [{ url: "https://picsum.photos/500/500?random=6", altText: "Stylish Jacket" }]
    },
    {
      id: "7",
      name: "Stylish Jacket",
      price: 20,
      image: [{ url: "https://picsum.photos/500/500?random=7", altText: "Stylish Jacket" }]
    }
  ];

  const checkScroll = useCallback(() => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 5);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 5);
  }, []);

  const scrollTo = useCallback((direction) => {
    if (!scrollRef.current) return;
    const cardWidth = scrollRef.current.querySelector('a')?.offsetWidth || 300;
    const gap = 24; // matches space-x-6 (1.5rem = 24px)
    const scrollAmount = cardWidth + gap;

    scrollRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    });
  }, []);

  // Handle resize for mobile detection
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
      checkScroll();
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [checkScroll]);

  // Scroll event listener
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const handleScroll = () => checkScroll();
    checkScroll(); // Initial check

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, [checkScroll]);

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl mb-4 font-bold">Explore New Arrival</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Step into the season’s hottest looks — runway-inspired styles curated to keep your wardrobe ahead of every trend.
          </p>
        </div>

        {/* Scrollable Container */}
        <div className="relative">
          <div
            ref={scrollRef}
            className="flex space-x-6 overflow-x-auto scroll-smooth pb-4 hide-scrollbar snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {newarrival.map((product) => (
              <Link
                to={`/product/${product.id}`}
                key={product.id}
                className="flex-shrink-0 w-[calc(100%-1.5rem)] sm:w-[calc(50%-1.5rem)] md:w-[calc(33.333%-1.5rem)] lg:w-[calc(25%-1.5rem)] group relative overflow-hidden rounded-lg transition-transform hover:scale-[1.02] snap-start"
              >
                <div className="relative">
                  <img
                    src={product.image[0].url}
                    alt={product.image[0].altText}
                    className="w-full h-[320px] xs:h-[360px] sm:h-[400px] md:h-[420px] object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h4 className="font-semibold text-lg">{product.name}</h4>
                    <p className="text-sm opacity-90">${product.price}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Scroll Buttons - Hidden on Mobile */}
          {!isMobile && (
            <div className="absolute -bottom-14 left-1/2 transform -translate-x-1/2 flex space-x-3">
              <button
                onClick={() => scrollTo('left')}
                disabled={!canScrollLeft}
                className={`p-3 rounded-full border transition-all ${
                  canScrollLeft
                    ? 'bg-white text-black border-gray-300 hover:bg-gray-100 shadow-md'
                    : 'bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed'
                }`}
                aria-label="Scroll Left"
              >
                <FaArrowLeft/>
              </button>
              <button
                onClick={() => scrollTo('right')}
                disabled={!canScrollRight}
                className={`p-3 rounded-full border transition-all ${
                  canScrollRight
                    ? 'bg-white text-black border-gray-300 hover:bg-gray-100 shadow-md'
                    : 'bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed'
                }`}
                aria-label="Scroll Right"
              >
                <FaArrowRight/>
              </button>
            </div>
          )}
        </div>

        {/* Hide Scrollbar */}
        <style jsx>{`
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .hide-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}</style>
      </div>
    </section>
  );
};

export default NewArrival;
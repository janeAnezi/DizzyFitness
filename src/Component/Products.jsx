import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Loader = () => (
  <div className="fixed inset-0 bg-white bg-opacity-90 z-50 flex justify-center items-center">
    <div className="flex flex-col items-center">
      <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-500 rounded-full animate-spin"></div>
      <p className="mt-4 text-blue-500 text-lg font-semibold">Loading...</p>
    </div>
  </div>
);

const Products = () => {
  const [equipments, setEquipment] = useState([]);
  const [filteredEquipments, setFilteredEquipments] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [loading, setLoading] = useState(false);
  const [selectedPrice, setSelectedPrice] = useState(1650000); // Start with highest price

  // Define the available price points
  const pricePoints = [
    6500,
    12000,
    15500,
    30000,
    45000,
    90000,
    190000,
    195000,
    204000,
    250000,
    280000,
    350000,
    1650000
  ].sort((a, b) => a - b);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setActiveCategory(category);
  };

  const handlePriceChange = (event) => {
    const value = Number(event.target.value);
    setSelectedPrice(value);
    
    
    const filtered = equipments.filter(equipment => {
      const equipmentPrice = Number(equipment.price.replace(/,/g, ''));
      return equipmentPrice <= value;
    });
    
    setFilteredEquipments(filtered);
  };

  const categories = [
    'Accessories',
    'Functional-fitness',
    'Massager',
    'Sports and Recovery',
    'Strength Equipment',
    'Cardio-Machines',
  ];

  useEffect(() => {
    async function fetchFitness() {
      setLoading(true);
      let url = 'http://localhost:5000/fitness';
      if (selectedCategory) {
        url += `?category=${selectedCategory}`;
      }

      try {
        const response = await fetch(url);
        const data = await response.json();
        setEquipment(data);
        setFilteredEquipments(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 700);
      }
    }

    fetchFitness();
  }, [selectedCategory]);


  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  
    
    AOS.refresh();
  }, [filteredEquipments]);
  

  return (
    <>
      {loading && <Loader />}
      <div className="mt-[140px] mb-[50px]">
        <h1 className="text-5xl font-bold text-center mb-[70px]">
          {activeCategory || 'All Categories'}
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-4">
          <div className="px-4 mb-8 lg:space-x-14 border-b-2 py-5 text-gray-900 font-semibold">
            <label className="mr-4 flex items-center space-x-2">
              <input
                type="radio"
                name="category"
                value=""
                checked={!activeCategory}
                onChange={() => handleCategoryChange(null)}
                className="mr-2"
              />
              <span className={!activeCategory ? 'text-blue-500' : ''}>
                All
              </span>
            </label>

            {categories.map((category) => (
              <label key={category} className="mr-4 py-2 flex items-center space-x-2">
                <input
                  type="radio"
                  name="category"
                  value={category}
                  checked={activeCategory === category}
                  onChange={() => handleCategoryChange(category)}
                  className="mr-2 "
                />
                <span
                  className={
                    activeCategory === category ? 'text-blue-500' : ''
                  }
                >
                  {category}
                </span>
              </label>
            ))}

            <div className='py-5 space-y-2'>
              <p className="text-blue-500 font-medium">Price Range: ₦{selectedPrice.toLocaleString()}</p>
              <input 
                type="range" 
                min={pricePoints[0]} 
                max={pricePoints[pricePoints.length - 1]} 
                value={selectedPrice}
                step="any"
                onChange={handlePriceChange}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-500"
                list="price-steps"
              />
              <datalist id="price-steps">
                {pricePoints.map((price) => (
                  <option key={price} value={price} />
                ))}
              </datalist>
              <div className="flex justify-between text-sm text-gray-500">
                <span>₦{pricePoints[0].toLocaleString()}</span>
                <span>₦{pricePoints[pricePoints.length - 1].toLocaleString()}</span>
              </div>
            </div>
          </div>

          <div className="mt-10 col-span-3 mx-5">
            <div className="pb-20">
              <h1 className="text-2xl font-bold">
                {activeCategory || 'All Categories'}
              </h1>
              <p className="flex gap-2 py-3">
                Home > <span>{activeCategory || 'All Categories'}</span>
              </p>
            </div>

            <div  className="grid grid-cols-3 lg:grid-cols-4 gap-5">
              {filteredEquipments.map((equipment, index) => (
                <div data-aos='fade-up' 
                
                  key={equipment.id}
                  className="p-4 border rounded shadow-md bg-white"
                >
                  <img
                    src={equipment.image}
                    alt={equipment.name}
                    className="w-[100%] h-[250px] object-cover"
                  />
                  <h2 className="font-bold text-center text-gray-600">
                    {equipment.title}
                  </h2>
                  <div className="flex gap-1 justify-center items-center text-gray-600 py-2 text-lg">
                    <p className="line-through text-red-600">
                      {equipment.discount}
                    </p>
                    <p>₦{equipment.price}</p>
                  </div>
                  <button className="bg-black hover:border-2 font-bold text-white py-3 px-6 text-sm w-full my-2 hover:border-red-600 hover:text-red-600">
                    ADD TO CART
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
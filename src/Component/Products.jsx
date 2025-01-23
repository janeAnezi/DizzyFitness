import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from './redux/cartSlice';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useToast } from './Toast'

const Loader = () => (
  <div className="fixed inset-0 bg-white bg-opacity-90 z-50 flex justify-center items-center">
    <div className="flex flex-col items-center">
      <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-500 rounded-full animate-spin"></div>
      <p className="mt-4 text-blue-500 text-lg font-semibold">Loading...</p>
    </div>
  </div>
);



const Products = () => {
   const showToast = useToast();
  const dispatch = useDispatch();
  const [equipments, setEquipment] = useState([]);
  const [filteredEquipments, setFilteredEquipments] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [loading, setLoading] = useState(false);
  const [selectedPrice, setSelectedPrice] = useState(1650000);

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

  const categories = [
    'Accessories',
    'Functional-fitness',
    'Massager',
    'Sports and Recovery',
    'Strength Equipment',
    'Cardio-Machines',
  ];

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

  useEffect(() => {
    async function fetchFitness() {
      setLoading(true);
      let url = 'http://localhost:5000/fitness';
      
      
      const token = localStorage.getItem('token');
      if (!token) {
        showToast('Please log in to view products.');
        setLoading(false);
        return;
      }
  
      if (selectedCategory) {
     
        url += `?category=${selectedCategory}`;
      }
  
      try {
        const response = await fetch(url, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,  
          },
        });
  
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        
        const data = await response.json();
        setEquipment(data);
        console.log('Cart Data:', data);
  
        // Apply price filter to the new data
        const filtered = data.filter(equipment => {
          const equipmentPrice = Number(equipment.price.replace(/,/g, ''));
          return equipmentPrice <= selectedPrice;
        });
        setFilteredEquipments(filtered);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 700);
      }
    }
  
    fetchFitness();
  }, [selectedCategory, selectedPrice]);
  

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
    
    AOS.refresh();
  }, [filteredEquipments]);

 
  

  return (
    <div className="container mx-auto">
      {loading && <Loader />}
      <div className="mt-[140px] mb-[50px]">
        <h1 className="text-5xl font-bold text-center mb-[70px]">
          {activeCategory || 'All Categories'}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Filters Section */}
          <div className="px-4 mb-8 space-y-6 border-b-2 py-5">
            <div className="space-y-4">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="category"
                  value=""
                  checked={!activeCategory}
                  onChange={() => handleCategoryChange(null)}
                  className="text-blue-500"
                />
                <span className={`font-semibold ${!activeCategory ? 'text-blue-500' : 'text-gray-900'}`}>
                  All
                </span>
              </label>

              {categories.map((category) => (
                <label key={category} className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="category"
                    value={category}
                    checked={activeCategory === category}
                    onChange={() => handleCategoryChange(category)}
                    className="text-blue-500"
                  />
                  <span className={`font-semibold ${activeCategory === category ? 'text-blue-500' : 'text-gray-900'}`}>
                    {category}
                  </span>
                </label>
              ))}
            </div>

            <div className="space-y-4">
              <p className="text-blue-500 font-medium">
                Price Range: ₦{selectedPrice.toLocaleString()}
              </p>
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

          {/* Products Grid */}
          <div className="col-span-1 md:col-span-3 px-4">
            <div className="pb-10">
              <h2 className="text-2xl font-bold">
                {activeCategory || 'All Categories'}
              </h2>
              <p className="flex gap-2 py-3 text-gray-600">
                Home &gt; <span>{activeCategory || 'All Categories'}</span>
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredEquipments.map((equipment) => (
                <div
                  key={equipment.id}
                  data-aos="fade-up"
                  className="p-4 border rounded-lg shadow-md bg-white hover:shadow-lg transition-shadow duration-300"
                >
                  <img
                    src={equipment.image}
                    alt={equipment.title}
                    className="w-full h-[250px] object-cover rounded-md"
                  />
                  <div className="mt-4 space-y-3">
                    <h3 className="font-bold text-center text-gray-800 line-clamp-2">
                      {equipment.title}
                    </h3>
                    <div className="flex gap-2 justify-center items-center">
                      {equipment.discount && (
                        <p className="line-through text-red-600 text-sm">
                          {equipment.discount}
                        </p>
                      )}
                      <p className="text-lg font-semibold text-gray-900">
                        ₦{equipment.price}
                      </p>
                    </div>
                    <button onClick={() => {dispatch(addToCart({
                      id: equipment.id,
                      image: equipment.image,
                      title: equipment.title, 
                      discount: equipment.discount,
                      price: equipment.price,
                      quantity: 1
                       }))
                       showToast(equipment.title);
                       }} className="w-full bg-black text-white py-3 px-6 text-sm font-bold transition-all duration-300 hover:bg-white hover:text-red-600 hover:border-2 hover:border-red-600">
                      ADD TO CART
                    </button>
                  </div>
                </div>
              ))}
            </div>




          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
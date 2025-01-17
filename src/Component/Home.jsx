import { useEffect, useState } from "react";
import Attatched from "./Attatched";
import Slider from "./Slider";
import Category from "./Category";
import Hero from "./Hero";
import NewArrival from "./NewArrival";
import Setup from "./Setup";
import Follow from "./Follow";

const Home = () => {
  const [equipments, setEquipmet] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);

  useEffect(() => {
    async function fetchFitness() {
      let url = "http://localhost:5000/fitness";
      if (selectedCategory) {
        url += `?category=${selectedCategory}`;  // Add category to the query string
      }
  
      try {
        const response = await fetch(url);
        const data = await response.json();
        console.log("Fetched Data: ", data);  // Log fetched data to the console
        setEquipmet(data);
      } catch (error) {
        console.error("Error fetching data:", error);  // Log error in case fetch fails
      }
    }
  
    fetchFitness();
  }, [selectedCategory]);  // Re-run when selectedCategory changes
  

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setActiveCategory(category);
  };

  return (
    <main className="">
      <Slider />
      <Attatched />
      <Hero equipments={equipments} selectedCategory={selectedCategory}  />
      <NewArrival
      equipments={equipments} 
       onSelectCategory={handleCategoryChange}
       selectedCategory={selectedCategory}
       activeCategory={activeCategory}
      />
       <Setup/>
       <Follow/>
       


      {/* <div>
        <Category
          onSelectCategory={handleCategoryChange}
          selectedCategory={selectedCategory}
          activeCategory={activeCategory}
        />
      </div> */}


    </main>
  );
};

export default Home;

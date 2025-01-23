// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import LayOut from './Component/LayOut';
// import Home from './Component/Home';
// import Benefits from './Component/Benefits';
// import FreeTips from './Component/FreeTips';
// import Products from './Component/Products';
// import Services from './Component/Services';
// import LogIn from './Component/LogIn';
// import Register from './Component/Register';
// import About from './Component/About';

// import './App.css'

// const App = () => {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<LayOut />}>
//           <Route index element={<Home />} />
//           <Route path="benefits" element={<Benefits />} />
//           <Route path="freetips" element={<FreeTips />} />
//           <Route path="products" element={<Products />} />
//           <Route path="services" element={<Services />} />
//           <Route path="about" element={<About />} />
//         </Route>

//         <Route path="/login" element={<LogIn />} />
//         <Route path="/register" element={<Register />} />
//       </Routes>
//     </BrowserRouter>
//   );
// };

// export default App;


import './App.css'
import LayOut from './Component/LayOut'

const App = () => {
  
  return (
    <div>
     <LayOut/>
    </div>
  );
};

export default App;







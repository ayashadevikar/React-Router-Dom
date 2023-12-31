import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";



function App() {
  
  return (
   
   <Router>
        <Header />
         <Routes>
               <Route path="/" element={<Home />}/> 
               <Route path="/about" element={<About  />}/>
               <Route path="/contact" element={<Contact />}/>
         </Routes>

   </Router>
   
  
  );
}

export default App;

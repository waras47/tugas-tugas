
import {
    BrowserRouter ,
    Routes,
    Route  
  } from "react-router-dom";
import About from "./About";
import Contact1 from "./Contact";
import Home from "./Home/index2";
import Menu from "./Navbar";

const Routing = () => {
    return (
        <div>
           
            <BrowserRouter>
            <Menu/> 
         
                <Routes>
                    <Route  path="/" element={<Home/>} />
                    <Route  path="/contact" element={<Contact1/>} />
                    <Route  path="/about" element={<About/>} />
        


                </Routes>
            </BrowserRouter>


        </div>
    )
}
export default Routing;

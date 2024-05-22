import Shop from "./Shop/Shop";
import About_Us from "./About_Us/About_Us";
import Get_in_touch from "./Get_in_touch/Get_in_touch";
import Gift from "./Gift/Gift";

import Home from "./Home/Home";
import New from "./New/New";
import Top_Selling_Product from "./Top_Selling_Product/Top_Selling_Product";


const Home_Page = () => {
    return (
        <div>
            <Home></Home>
            <About_Us></About_Us>
            <Top_Selling_Product></Top_Selling_Product>
            <Shop></Shop>
            <Gift></Gift>
            <New></New>
            <Get_in_touch></Get_in_touch>
            
        </div>
    );
};

export default Home_Page;
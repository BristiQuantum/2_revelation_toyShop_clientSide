import { Outlet } from "react-router-dom";
import Navbar from "../page/common/Navbar/Navbar";
import Footer from "../page/common/Footer/Footer";


const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;
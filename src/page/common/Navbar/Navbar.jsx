import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../firebase/AuthProvider";
import Swal from "sweetalert2";
import { FaUserCircle } from "react-icons/fa";


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)

    // log out
    const handleLogOut = () => {
        logOut()
            .then(() => {
                Swal.fire("log out has been completed !");
            }).catch((error) => {
                console.log(error);
            });
    }

    const navOptions = <>
        <li><Link className="hover:text-[#ea5f8a]" to="/">Home</Link></li>
        <li><Link className="hover:text-[#ea5f8a]" to="/all-toy">All Toys</Link></li>
        <li><Link className="hover:text-[#ea5f8a]" to="/about">About Us</Link></li>
        <li><Link className="hover:text-[#ea5f8a]" to="/contact">Contact</Link></li>
        <li><Link className="hover:text-[#ea5f8a]" to="/blog">Blog</Link></li>

        {
            user &&
            <li><Link className="hover:text-[#ea5f8a]" to="/my-shop">My Shop</Link></li>
        }

    </>
    return (
        <div className="nav-container">
            {/* nav small screen 
            ............................. */}
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="btn-nav-link">
                        {navOptions}
                    </ul>
                </div>
                <Link className="logo-text">Revel<span className="text-[#ea5f8a] font-bold">ation.</span></Link>
            </div>

            {/* navbar 
            .................... */}
            <div className="nav-navigation">
                <ul className="nav-link-container">
                    {navOptions}
                </ul>
            </div>

            {/* nav button 
            ......................... */}
            <div className="navbar-end">
                {
                    // user ? 'logout' : 'login'
                    user ?
                        <div className="flex items-center gap-2">
                            <Link onClick={handleLogOut} className="text-xs hover:text-white bg-[#ea5f8a] nav-btn">Log Out</Link>
                            <Link title={`${user && user.displayName}`} className="text-xl" to="/my-shop"><FaUserCircle className="text-xl" /></Link>
                        </div>
                        : <Link className="hover:text-[#ea5f8a] nav-btn text-xs" to="/login">Login</Link>
                }
            </div>
        </div>
    );
};

export default Navbar;
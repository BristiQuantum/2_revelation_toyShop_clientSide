/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { AiFillGoogleSquare } from "react-icons/ai";
import { FaGithubSquare } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../firebase/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
    const { login } = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || "/"



    // password login add function
    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const info = {
            email,
            password
        };
        // console.log(info);

        // login
        login(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                // console.log(user);

                if (user) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "logged in successfully !",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
                form.reset();
                navigate(from, {replace: true})

            })
            .catch((error) => {
                console.log(error.message);
            });

    };

    // console.log(location);
    return (
        <div className="set-p md:pt-40 pb-0">
            <main className="bg-[#48322C] text-white rounded-3xl flex flex-col md:flex-row items-center p-9">
                <div className="md:mr-9 md:border-r-2 border-orange-500 pr-6 space-y-4">
                    <div className="flex w-full gap-6 text-nowrap items-center justify-center bg-[#ea5f8a] text-[#48322C] p-4 rounded-lg font-bold text-base">
                        <AiFillGoogleSquare className="text-2xl" />
                        <span>Login With Google</span>
                    </div>
                    <div className="flex w-full gap-6 text-nowrap items-center justify-center bg-[#ea5f8a] text-[#48322C] p-4 rounded-lg font-bold text-base">
                        <FaGithubSquare className="text-2xl" />
                        <span>Login With Github</span>
                    </div>
                </div>

                <div className="flex-grow flex mx-3 sm:mx-0 w-full flex-col space-y-10 lg:p-9">
                    <div className="hidden md:block text-center text-4xl font-medium text-[#ea5f8a]">Log In</div>

                    <form onSubmit={handleLogin} className="flex-grow flex mx-3 sm:mx-0 w-full flex-col space-y-10 lg:p-9">
                        <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-[#ea5f8a]">
                            <input type="text" name="email" placeholder="Email or Username" className="w-full border-none bg-transparent outline-none placeholder-italic focus:outline-none" required autoComplete="off"/>
                        </div>

                        <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-[#ea5f8a]">
                            <input type="password" name="password" placeholder="Password" className="w-full border-none bg-transparent outline-none placeholder-italic focus:outline-none" required autoComplete="off"/>
                        </div>

                        <button type="submit" className="transform rounded-lg bg-[#ea5f8a] py-4 font-bold text-[#48322C]">LOG IN</button>
                    </form>

                    <button className="transform text-xs text-center font-semibold text-gray-500 duration-300 hover:text-gray-300">FORGOT PASSWORD?</button>

                    <p className="text-center text-lg">
                        Do not have any account?
                        <Link to="/signup" className="font-medium text-[#ea5f8a] underline-offset-4 hover:underline inline-block ml-2">Sign Up</Link>
                    </p>
                </div>
            </main>
        </div>
    );
};

export default Login;

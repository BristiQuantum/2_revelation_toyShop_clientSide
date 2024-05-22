
import Title from "../common/Title/Title";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import My_Shop_Card from "./My_Shop_Card";
import { AuthContext } from "../../firebase/AuthProvider";


const My_Shop = () => {
    const navigate = useNavigate()
    const [product, SetProduct] = useState([])
    const {user} = useContext(AuthContext)

    const goToHome = () => {
        navigate("/")
    }
    const goToAddProduct = () => {
        navigate("/add-product")
    }


    useEffect(() => {
        fetch(`https://two-revelation-toyshop-serverside.onrender.com/products?email=${user.email}`)
            .then(res => res.json())
            .then(data => SetProduct(data))
    }, [])

    return (
        <div className="set-p pb-0">

            <div className="text-center">
                <Title
                    title='My Shop'
                    subTitle='Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad nihil eaque temporibus sunt nulla
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad nihil eaque temporibus sunt nulla. Lorem ipsum dolor sit amet consectetur adipisicing elit. '></Title>
                <div className=" flex gap-7 justify-center">
                    <button onClick={goToAddProduct} className="btn-fill">Add Product</button>
                    <button onClick={goToHome} className="btn-not-fill">Go To Home Page</button>
                </div>
            </div>

            <div className="">
                <section id="Projects"
                    className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">

                    {
                        product.map(data => <My_Shop_Card key={data._id} data={data} product={product} SetProduct={SetProduct}></My_Shop_Card>)
                    }



                </section>
            </div>


        </div>
    );
};

export default My_Shop;
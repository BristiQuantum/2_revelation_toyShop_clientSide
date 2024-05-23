/* eslint-disable react/prop-types */
import { FaPencil, FaTrashCan } from "react-icons/fa6";
import { IoIosStar } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';
import Swal from "sweetalert2";

const My_Shop_Card = ({ data, SetProduct, product }) => {
    const navigate = useNavigate();
    const { Name, Price, Photo_url, _id } = data;

    const updateProduct = () => {
        navigate(`/update-product/${_id}`);
    };

    const deleteProduct = (_id) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Delete"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://two-revelation-toyshop-serverside.onrender.com/products/${_id}`, {
                    method: 'DELETE',
                })
                    .then(response => response.json())
                    .then(data => {
                        // console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Product has been deleted.",
                                icon: "success"
                            });

                            const remaining = product.filter(cof => cof._id !== _id);
                            SetProduct(remaining)
                        }

                    })

            }
        });
    }

    return (
        <div className="w-full h-full bg-white shadow-md rounded-xl border-4 border-[#48322C] overflow-hidden duration-500 hover:shadow-xl">
            <div className="flex flex-col-reverse sm:flex-row">
                <div className="basis-1/2 h-[444px]">
                    <img
                        src={Photo_url}
                        alt={`${Name}`}
                        className="h-full w-full object-cover rounded-t-xl p-6 duration-500 hover:scale-105"
                    />
                </div>

                <div className="basis-1/2 flex-grow px-4 py-3 w-full  bg-[#48322C]">
                    {/* Product info */}
                    <div className="border-b-4 border-white pb-7">
                        <p className="text-lg font-bold text-[#ea5f8a] truncate capitalize">{Name}</p>
                        <p className="text-lg font-semibold text-[#A7A6A6]">
                            <span>Price: </span> <span className='text-sm'>${Price}</span>
                        </p>
                        <div className="flex items-center">
                            <div className="flex items-center mt-2">
                                {[...Array(5)].map((_, i) => (
                                    <IoIosStar key={i} className="text-sm text-yellow-600" />
                                ))}
                            </div>
                            <div className="ml-auto">
                                <button onClick={() => navigate(`/single-toy/${_id}`)} className="btn-fill text-xs py-1">Details</button>
                            </div>
                        </div>
                    </div>

                    {/* Update info */}
                    <div className="text-center text-[#ea5f8a] underline mt-7 mb-4">
                        <p>Product info</p>
                    </div>
                    <div className="text-[11px]">
                        <p>
                            <span className="font-bold text-sm">Upload Time: </span>
                            <span className="text-yellow-700">17 June, 2015 - 15:22:00</span>
                        </p>
                        <p>
                            <span className="font-bold text-sm">Last Update: </span>
                            <span className="text-yellow-700">17 June, 2015 - 15:22:00</span>
                        </p>
                        <p>
                            <span className="font-bold text-sm">Stock: </span>
                            <span className="text-yellow-700">9</span>
                        </p>
                        <p>
                            <span className="font-bold text-sm">Total Sell: </span>
                            <span className="text-yellow-700">17<span className="text-[#ea5f8a] font-bold text-xs">k</span></span>
                        </p>
                    </div>

                    {/* Update option */}
                    <div>
                        <div onClick={updateProduct} className="flex gap-5 border-2 rounded-lg p-2 items-center justify-center my-4 border-[#ea5f8a] cursor-pointer transition-all ease-in-out hover:bg-[#ea5f8bac]">
                            <FaPencil />
                            <span>Update info</span>
                        </div>
                        <div onClick={() => deleteProduct(_id)} className="flex gap-5 border-2 rounded-lg p-2 items-center justify-center my-4 border-[#ea5f8a] text-yellow-500 transition-all ease-in-out hover:bg-[#ea5f8bac] cursor-pointer">
                            <FaTrashCan />
                            <span>Delete item</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

My_Shop_Card.propTypes = {
    data: PropTypes.shape({
        Name: PropTypes.string.isRequired,
        Price: PropTypes.number.isRequired,
        Photo_url: PropTypes.string.isRequired,
        _id: PropTypes.string.isRequired,
    }).isRequired,
};

export default My_Shop_Card;

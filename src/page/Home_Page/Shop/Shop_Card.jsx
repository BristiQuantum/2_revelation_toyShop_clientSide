/* eslint-disable react/prop-types */
import { IoIosStar } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Shop_Card = ({ data }) => {

    const { Name, Price, Photo_url, _id } = data;
    const navigate = useNavigate();
    

    return (
        <div className="w-72 bg-white shadow-md rounded-xl  border-4 border-[#48322C] overflow-hidden duration-500 hover:shadow-xl">
            <div>
                <div className="h-[463px] w-full">
                    <img src={Photo_url}
                        alt="Product" className="h-full w-full object-cover rounded-t-xl pb-5 duration-500 hover:scale-105" />
                </div>

                <div className="px-4 py-3 w-full h-full bg-[#48322C] border-t-4 border-[#A7A6A6]">
                    <p className="text-lg font-bold text-[#ea5f8a] truncate block capitalize">{Name}</p>
                    <p className="text-lg font-semibold text-[#A7A6A6] cursor-auto"><span >Price: </span> <span className='text-sm'>${Price}</span> </p>
                    <div className="flex items-center">
                        <div className="flex items-center mt-2">
                            <IoIosStar className='text-sm text-yellow-600' />
                            <IoIosStar className='text-sm text-yellow-600' />
                            <IoIosStar className='text-sm text-yellow-600' />
                            <IoIosStar className='text-sm text-yellow-600' />
                            <IoIosStar className='text-sm text-yellow-600' />
                        </div>

                        <div className="ml-auto"><button onClick={() => navigate(`/single-toy/${_id}`)} className='btn-fill text-xs py-1'>Details</button></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop_Card;
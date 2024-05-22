import { IoIosStar } from 'react-icons/io';
import { useLoaderData } from 'react-router-dom';
import img1 from '../../assets/galary/6.webp'

const Single_Toy = () => {
    const loadData = useLoaderData();
    const { Name, Price, Photo_url} = loadData;

    console.log(loadData);
    return (
        <div className="set-p pt-32">
            <div className="bg-[#EA91AD] dark:bg-gray-800 py-8 rounded-2xl">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row -mx-4">
                        <div className="md:flex-1 px-4">
                            <div className=" bg-[#48322C] p-8 rounded-2xl dark:bg-gray-700 mb-4">
                                <img className="w-full h-full object-cover rounded-2xl" src={Photo_url} alt="Product Image" />
                            </div>
                            <div className="flex" >
                                <div className=" px-2">
                                    <button className="btn-fill bg-[#48322C]">Add to Cart</button>
                                </div>
                                <div className=" px-2">
                                    <button className="btn-not-fill bg-[#48322C] text-white">Add to Wishlist</button>
                                </div>
                            </div>
                        </div>
                        <div className="md:flex-1 px-4">
                            <h2 className="text-2xl font-extrabold text-[#48322C] dark:text-white mb-2">{Name}</h2>
                            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
                                ante justo. Integer euismod libero id mauris malesuada tincidunt.
                            </p>
                            <div className="flex mb-4">
                                <div className="mr-4">
                                    <span className="font-bold text-gray-700 dark:text-gray-300">Price:</span>
                                    <span className="text-gray-600 dark:text-gray-300">${Price}</span>
                                </div>
                                <div>
                                    <span className="font-bold text-gray-700 dark:text-gray-300">Quantity:</span>
                                    <span className="text-gray-600 dark:text-gray-300"> 10</span>
                                </div>
                            </div>

                            <div className="mb-4">
                                <span className="font-bold text-gray-700 dark:text-gray-300">Rating:</span>
                                <div className="flex items-center mt-2">
                                    <IoIosStar className='text-2xl text-yellow-600' />
                                    <IoIosStar className='text-2xl text-yellow-600' />
                                    <IoIosStar className='text-2xl text-yellow-600' />
                                    <IoIosStar className='text-2xl text-yellow-600' />
                                    <IoIosStar className='text-2xl text-yellow-600' />
                                </div>
                            </div>
                            <div className='bg-[#48322C] text-[#ea5f8a] p-8 rounded-2xl'>
                                <span className="font-bold text-[#EDE4D5]">Product Description:</span>
                                <p className="text-[#ea5f8a] text-sm mt-2">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                                    sed ante justo. Integer euismod libero id mauris malesuada tincidunt. Vivamus commodo nulla ut
                                    lorem rhoncus aliquet. Duis dapibus augue vel ipsum pretium, et venenatis sem blandit. Quisque
                                    ut erat vitae nisi ultrices placerat non eget velit. Integer ornare mi sed ipsum lacinia, non
                                    sagittis mauris blandit. Morbi fermentum libero vel nisl suscipit, nec tincidunt mi consectetur.
                                </p>
                            </div>

                            <div className="mb-4 mt-8 border border-[#48322C] p-2 rounded-2xl">
                                <span className="font-bold text-gray-700 dark:text-gray-300">Seller info:</span>
                                <div className=" space-y-3 p-6">
                                    <div className="w-12 h-12"><img src={img1} alt="" className='w-full h-full object-cover rounded-full' /></div>
                                    <p className='text-xs text-[#48322C]'><span className='font-bold text-base'>Name: </span>Bristi</p>
                                    <p className='text-xs text-[#48322C]'><span className='font-bold text-base'>Email: </span>Example@gmail.com</p>
                                    <p className='text-xs text-[#48322C]'><span className='font-bold text-base'>Phone: </span>+880 123456767</p>
                                    <p className='text-xs text-[#48322C]'><span className='font-bold text-base'>Adress: </span>123 Dhaka, Bangladesh</p>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Single_Toy;
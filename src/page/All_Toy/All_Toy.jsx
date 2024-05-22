
import { useLoaderData } from 'react-router-dom';
import Shop_Card from '../Home_Page/Shop/Shop_Card';
import img1 from '../../assets/galary/2.jpg';
import img2 from '../../assets/galary/4.webp';
import img3 from '../../assets/galary/14.webp';
import { useState } from 'react';

const All_Toy = () => {
    const loadData = useLoaderData();
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;
console.log(loadData)
    // Calculate the total number of pages
    const totalPages = Math.ceil(loadData.length / itemsPerPage);

    // Get the data for the current page
    const currentData = loadData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    // Change page
    const goToPage = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className="flex flex-col-reverse md:flex-row">
            <div className="basis-[75%] p-5 pt-24">
                <section
                    id="Projects"
                    className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-6 mt-10 mb-5"
                >
                    {currentData.map((data) => (
                        <Shop_Card key={data._id} data={data} />
                    ))}
                </section>
                <div className="flex justify-center space-x-2">
                    {Array.from({ length: totalPages }, (_, index) => (
                        <button
                            key={index + 1}
                            onClick={() => goToPage(index + 1)}
                            className={`px-4 py-2 ${currentPage === index + 1 ? 'bg-[#48322C] text-white' : 'bg-white text-[#48322C]'} border border-[#48322C] rounded`}
                        >
                            {index + 1}
                        </button>
                    ))}
                </div>
            </div>

            {/* Right side */}
            <div className="basis-[25%] bg-[#48322C] p-5 pt-24">
                <div className="border-4 my-4 border-[#EDE4D5] rounded-2xl">
                    <img src={img1} alt="" className="rounded-2xl p-3" />
                </div>
                <div className="border-4 my-4 border-[#EDE4D5] rounded-2xl">
                    <img src={img2} alt="" className="rounded-2xl p-3" />
                </div>
                <div className="border-4 my-4 border-[#EDE4D5] rounded-2xl">
                    <img src={img3} alt="" className="rounded-2xl p-3" />
                </div>


                <div className="border-4 my-4 border-[#EDE4D5] rounded-2xl hidden md:block">
                    <img src={img1} alt="" className="rounded-2xl p-3" />
                </div>
                <div className="border-4 my-4 border-[#EDE4D5] rounded-2xl hidden md:block">
                    <img src={img2} alt="" className="rounded-2xl p-3" />
                </div>
                <div className="border-4 my-4 border-[#EDE4D5] rounded-2xl hidden md:block">
                    <img src={img3} alt="" className="rounded-2xl p-3" />
                </div>
            </div>
        </div>
    );
};

export default All_Toy;

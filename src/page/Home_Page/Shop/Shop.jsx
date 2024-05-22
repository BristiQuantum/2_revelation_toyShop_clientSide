import { useEffect, useState } from 'react';
import Shop_Card from './Shop_Card';

// Define the openTab function outside the component
function openTab(evt, tabName, setActiveTab) {
    const tabcontent = document.getElementsByClassName("tabcontent");
    for (let i = 0; i < tabcontent.length; i++) {
        tabcontent[i].classList.add("hidden");
    }
    const tablinks = document.getElementsByTagName("button");
    for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active-tab");
    }
    document.getElementById(tabName).classList.remove("hidden");
    evt.currentTarget.classList.add("active-tab");

    // Update active tab state
    setActiveTab(tabName);
}

const Shop = () => {
    const [activeTab, setActiveTab] = useState('tab1');
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState({
        tab1: 1,
        tab2: 1,
        tab3: 1,
    });
    const itemsPerPage = 6;

    useEffect(() => {
        fetch(`https://two-revelation-toyshop-serverside.onrender.com/products`)
        .then(res => res.json())
        .then(data => setProducts(data))
    }, []);

    const changePage = (tab, pageNumber) => {
        setCurrentPage(prev => ({ ...prev, [tab]: pageNumber }));
    };

    // console.log(products)

    const renderProducts = (tab, category) => {
        const filteredProducts = products.filter(product => product.Catagory === category);
        const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
        const currentData = filteredProducts.slice((currentPage[tab] - 1) * itemsPerPage, currentPage[tab] * itemsPerPage);

        return (
            <>
                <section id="Projects"
                    className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
                    {currentData.map(data => <Shop_Card key={data._id} data={data}></Shop_Card>)}
                </section>
                <div className="flex justify-center space-x-2 mt-6">
                    {Array.from({ length: totalPages }, (_, index) => (
                        <button
                            key={index + 1}
                            onClick={() => changePage(tab, index + 1)}
                            className={`px-4 py-2 ${currentPage[tab] === index + 1 ? 'bg-[#48322C] text-white' : 'bg-white text-[#48322C]'} border border-[#48322C] rounded`}
                        >
                            {index + 1}
                        </button>
                    ))}
                </div>
            </>
        );
    };

    return (
        <div className="w-full set-p pb-0">
            <div className="w-full mx-auto">
                <div className="flex sm:w-1/2 mx-auto border-2 border-[#48322C] bg-[#A7A6A6] rounded-xl">
                    <button
                        className={`w-1/3 py-4 text-center text-[#ea5f8a] font-extrabold rounded-tl-lg focus:outline-none ${activeTab === 'tab1' && 'active-tab'}`}
                        onClick={(e) => openTab(e, 'tab1', setActiveTab)}>Moana</button>
                    <button
                        className={`w-1/3 py-4 text-center text-[#ea5f8a] font-extrabold focus:outline-none ${activeTab === 'tab2' && 'active-tab'}`}
                        onClick={(e) => openTab(e, 'tab2', setActiveTab)}>Cinderella</button>
                    <button
                        className={`w-1/3 py-4 text-center text-[#ea5f8a] font-extrabold rounded-tr-lg focus:outline-none ${activeTab === 'tab3' && 'active-tab'}`}
                        onClick={(e) => openTab(e, 'tab3', setActiveTab)}>Frozen</button>
                </div>

                <div id="tab1" className={`tabcontent p-4 ${activeTab !== 'tab1' && 'hidden'}`}>
                    {renderProducts('tab1', 'Moana')}
                </div>
                <div id="tab2" className={`tabcontent p-4 ${activeTab !== 'tab2' && 'hidden'}`}>
                    {renderProducts('tab2', 'Cinderella')}
                </div>
                <div id="tab3" className={`tabcontent p-4 ${activeTab !== 'tab3' && 'hidden'}`}>
                    {renderProducts('tab3', 'Frozen')}
                </div>
            </div>
        </div>
    );
};

export default Shop;

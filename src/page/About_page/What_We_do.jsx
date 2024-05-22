
import img from '../../assets/galary/15.jpg'
const What_We_do = () => {
    return (
        <div className='set-p py-0 '>
            <div className="sm:flex items-center max-w-screen-xl">
                <div className="sm:w-1/2 p-10">
                    <div className="image object-center text-center">
                        <img src={img} />
                    </div>
                </div>
                <div className="sm:w-1/2 p-5">
                    <div className="text">
                        <span className="text-[#ea5f8a] border-b-2 border-[#ea5f8a] uppercase">What We Do ?</span>
                        <h2 className="my-3 text-indigo-600">We are the best <span className="text-[#ea5f8a]">Doll selling company</span>
                        </h2>
                        <div className="text-black text-xs space-y-4">
                            <div className="">
                                <h2 className="text-lg mb-2">01
                                    Refreshing Design</h2>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium et dolores eveniet earum error quia tempora optio, culpa, adipisci atque officia nemo ab beatae eum qui dolorem a neque modi.</p>
                            </div>
                            <div className="">
                                <h2 className="text-lg mb-2">01
                                    Refreshing Design</h2>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium et dolores eveniet earum error quia tempora optio, culpa, adipisci atque officia nemo ab beatae eum qui dolorem a neque modi.</p>
                            </div>
                            <div className="">
                                <h2 className="text-lg mb-2">01
                                    Refreshing Design</h2>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium et dolores eveniet earum error quia tempora optio, culpa, adipisci atque officia nemo ab beatae eum qui dolorem a neque modi.</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default What_We_do;
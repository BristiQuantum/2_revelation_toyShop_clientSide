import { FaFacebookSquare } from "react-icons/fa";


const Footer = () => {
    return (
        <div className="">
            
        

            <footer className="bg-[#48322c] text-[#ea5f8a] text-lg font-bold">
                {/* svg wave  */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 240"><path fill="#ffffff" fillOpacity="1" d="M0,192L20,170.7C40,149,80,107,120,112C160,117,200,171,240,181.3C280,192,320,160,360,165.3C400,171,440,213,480,208C520,203,560,149,600,144C640,139,680,181,720,186.7C760,192,800,160,840,133.3C880,107,920,85,960,112C1000,139,1040,213,1080,229.3C1120,245,1160,203,1200,165.3C1240,128,1280,96,1320,101.3C1360,107,1400,149,1420,170.7L1440,192L1440,0L1420,0C1400,0,1360,0,1320,0C1280,0,1240,0,1200,0C1160,0,1120,0,1080,0C1040,0,1000,0,960,0C920,0,880,0,840,0C800,0,760,0,720,0C680,0,640,0,600,0C560,0,520,0,480,0C440,0,400,0,360,0C320,0,280,0,240,0C200,0,160,0,120,0C80,0,40,0,20,0L0,0Z"></path></svg>


                <div className="max-w-screen-xl px-4 py-0 mx-auto sm:px-6 lg:px-8">
                    <div className="">

                        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2  lg:grid-cols-4">
                            <div className=''>
                                <p className="font-medium">
                                    Our mission:
                                </p>
                                <nav className="flex flex-col mt-4 space-y-2 text-sm text-[#d2c3bd]">
                                    <p>
                                        Veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit quia.
                                    </p>
                                </nav>
                            </div>
                            <div>
                                <p className="font-medium">
                                    Popular posts:
                                </p>
                                <nav className="flex flex-col mt-4 space-y-2 text-sm text-[#d2c3bd]">
                                    <a className="hover:opacity-75 border-b border-spacing-3 pt-1 text-nowrap" href> Lorem ipsum dolor sit amet. </a>
                                    <a className="hover:opacity-75 border-b border-spacing-3 pt-1 text-nowrap" href> Lorem, ipsum. </a>
                                    <a className="hover:opacity-75 border-b border-spacing-3 pt-1 text-nowrap" href> Lorem, ipsum dolor.</a>
                                    <a className="hover:opacity-75 border-b border-spacing-3 pt-1 text-nowrap" href> Lorem, ipsum dolor kirend.</a>
                                </nav>
                            </div>
                            <div>
                                <p className="font-medium">
                                    Contact us:
                                </p>
                                <nav className="flex flex-col mt-4 space-y-2 text-sm text-[#d2c3bd]">
                                    <div className="space-y-4">
                                        <p>Bambino INC. <br />6737 Arch St, PA 19107</p>
                                        <p>Tel. (421) 562 524 534 <br />office@bambino.com</p>
                                    </div>
                                </nav>
                            </div>
                            <div>
                                <p className="font-medium">
                                    Social media:
                                </p>
                                <nav className="flex flex-col mt-4 space-y-2 text-sm text-[#d2c3bd]">
                                    <div className="space-y-4">
                                        <div className="sm:flex gap-4 space-y-4 sm:space-y-0">
                                            <div className="flex capitalize items-center gap-3 border border-[#826760] rounded-md px-3 py-2 sm:w-fit "><FaFacebookSquare className="text-lg text-[#826760]" />< span className="text-xs">facebook</span></div>
                                            <div className="flex capitalize items-center gap-3 border border-[#826760] rounded-md px-3 py-2 sm:w-fit "><FaFacebookSquare className="text-lg text-[#826760]" />< span className="text-xs">facebook</span></div>
                                        </div>
                                        <div className="sm:flex gap-4 space-y-4 sm:space-y-0">
                                            <div className="flex capitalize items-center gap-3 border border-[#826760] rounded-md px-3 py-2 sm:w-fit "><FaFacebookSquare className="text-lg text-[#826760]" />< span className="text-xs">facebook</span></div>
                                            <div className="flex capitalize items-center gap-3 border border-[#826760] rounded-md px-3 py-2 sm:w-fit "><FaFacebookSquare className="text-lg text-[#826760]" />< span className="text-xs">facebook</span></div>
                                        </div>
                                    </div>
                                </nav>
                            </div>





                        </div>




                    </div>
                    <p className="mt-8  text-[#826760] text-center py-7 text-xs md:text-base">
                        Copyright 2014 Bambino. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;

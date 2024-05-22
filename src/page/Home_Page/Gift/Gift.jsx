import img from '../../../assets/f.webp'


const Gift = () => {
    return (
        <div className="set-p pt-16 sm:pt-24  xl:bg-[#EDE4D5] pb-16 sm:pb-32 mb-0 sm:mb-9 ">
           


            <div className="relative flex flex-col items-center mx-auto lg:flex-row-reverse lg:max-w-5xl lg:mt-12 xl:max-w-6xl">

              
                <div className="w-full h-64 lg:w-1/2 lg:h-auto xl:-rotate-12">
                    <img className="h-full w-full object-cover" src={img} alt="Winding mountain road" />
                </div>
              

                
                <div
                    className="max-w-lg bg-[#48322C] text-[#826760] md:max-w-2xl md:z-10 md:shadow-lg md:absolute md:top-0 md:mt-48 lg:w-3/5 lg:left-0 lg:mt-20 lg:ml-20 xl:mt-24 xl:ml-12 rounded-2xl border-8 border-[#826760] xl:rotate-6">
                 
                    <div className="flex flex-col p-12 md:px-16">
                        <h2>We Care About Your Felling !</h2>
                        <p className="mt-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat.
                        </p>
                       
                        <div className="mt-8">
                            <button className="btn-fill">Learn More</button>
                        </div>
                    </div>
                   
                </div>
                

            </div>

        </div>
    );
};

export default Gift;
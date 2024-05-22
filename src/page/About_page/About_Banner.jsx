import img from '../../assets/galary/7.png'
import img2 from '../../assets/galary/8.jpg'
import img3 from '../../assets/galary/14.png'

const About_Banner = () => {
    return (
        <div className="set-p ">

            <div className="flex pt-12 px-6 md:px-20  items-center justify-center bg-hero md:h-screen overflow-hidden">
                <div className="flex flex-col  gap-6 md:flex-row items-center max-w-8xl">
                    <div className="w-full md:w-1/2 lg:pr-32">
                        <h2>There’s a
                            better way to talk with your customers.</h2>
                        <p className='text-black my-4'>
                            Help Scout is designed with your customers in mind. Provide email and live chat with a personal touch,
                            and deliver help content right where your customers need it, all in one place, all for one low price.
                        </p>
                        <div className="mt-10">
                            <button className="btn-fill">Get started</button>
                            
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 flex justify-center md:justify-end">
                        <div className="flex justify-center items-center">
                            <div className="basis-1/2"><img src={img} alt="" /></div>
                            <div className="basis-1/2">
                                <img src={img2} alt="" />
                                <img src={img3} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About_Banner;
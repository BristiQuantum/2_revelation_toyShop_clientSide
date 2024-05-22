import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from "keen-slider/react"

// import Title from "../../common/Title/Title";
import img1 from '../../../assets/top-selling/pic_slid_01_0.png'
import img2 from '../../../assets/galary/3.jpg'

const Top_Selling_Product = () => {

    // const [sliderRef] = useKeenSlider({
    //     slides: {
    //         perView: 2,
    //         spacing: 15,
    //     },
    // })


    const [sliderRef] = useKeenSlider({
        slides: xyz(),
    });

    function xyz() {
        if (window.innerWidth <= 768) {
            return {
                perView: 2,
                spacing: 15,
            };
        } else {
            return {
                perView: 5,
                spacing: 15,
            };
        }
    }


    return (
        <div className="set-t">
            <div className="text-center py-9">
                <h3>Top Selling Products</h3>
            </div>
            <div ref={sliderRef} className="keen-slider">
                <div className="keen-slider__slide number-slide1">
                    <img src={img1} alt="" />
                </div>
                <div className="keen-slider__slide number-slide2">
                    <img src={img2} alt="" className='w-full h-full object-cover' />
                </div>
                <div className="keen-slider__slide number-slide3">
                    <img src={img1} alt="" />
                </div>
                <div className="keen-slider__slide number-slide4">
                    <img src={img2} alt="" className='w-full h-full object-cover' />
                </div>
                <div className="keen-slider__slide number-slide5">
                    <img src={img1} alt="" />
                </div>
                <div className="keen-slider__slide number-slide6">
                    <img src={img2} alt="" className='w-full h-full object-cover' />
                </div>
                <div className="keen-slider__slide number-slide1">
                    <img src={img1} alt="" />
                </div>
                <div className="keen-slider__slide number-slide2">
                    <img src={img2} alt="" className='w-full h-full object-cover' />
                </div>
                <div className="keen-slider__slide number-slide3">
                    <img src={img1} alt="" />
                </div>
                <div className="keen-slider__slide number-slide4">
                    <img src={img2} alt="" className='w-full h-full object-cover' />
                </div>
                <div className="keen-slider__slide number-slide5">
                    <img src={img1} alt="" />
                </div>
                <div className="keen-slider__slide number-slide6">
                    <img src={img2} alt="" className='w-full h-full object-cover' />
                </div>
            </div>

        </div>
    );
};

export default Top_Selling_Product;
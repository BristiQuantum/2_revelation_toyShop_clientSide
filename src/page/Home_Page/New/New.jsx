import Title from "../../common/Title/Title";
import img1 from '../../../assets/galary/home1.png'
import img2 from '../../../assets/galary/home.png'
import img3 from '../../../assets/galary/5.jpeg'
import img9 from '../../../assets/galary/6.webp'
import img10 from '../../../assets/galary/7.png'
import img5 from '../../../assets/galary/1.jpeg'
import img6 from '../../../assets/galary/2.jpg'
import img7 from '../../../assets/galary/3.jpg'
import img8 from '../../../assets/galary/4.webp'
import img11 from '../../../assets/galary/8.jpg'
import img12 from '../../../assets/galary/14.webp'


const New = () => {
    return (
        <div className="set-p">
            <div className="text-center">
                <Title
                    title='Doll Gallery !'
                    subTitle='we are the best doll supling company. we care about your felling and we know the value of happiness.'></Title>
            </div>
            <div className="container mx-auto p-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="grid gap-4">
                        <div>
                            <img
                                className="h-auto max-w-full rounded-lg"
                                src={img10}
                                alt=""
                            />
                        </div>
                        <div>
                            <img
                                className="h-auto max-w-full rounded-lg"
                                src={img6}
                                alt=""
                            />
                        </div>
                        <div>
                            <img
                                className="h-auto max-w-full rounded-lg"
                                src={img2}
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="grid gap-4">
                        <div>
                            <img
                                className="h-auto max-w-full rounded-lg"
                                src={img3}
                                alt=""
                            />
                        </div>
                        <div>
                            <img
                                className="h-auto max-w-full rounded-lg"
                                src={img5}
                                alt=""
                            />
                        </div>
                        <div>
                            <img
                                className="h-auto max-w-full rounded-lg"
                                src={img7}
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="grid gap-4">
                        <div>
                            <img
                                className="h-auto max-w-full rounded-lg"
                                src={img1}
                                alt=""
                            />
                        </div>
                        <div>
                            <img
                                className="h-auto max-w-full rounded-lg"
                                src={img11}
                                alt=""
                            />
                        </div>
                        <div>
                            <img
                                className="h-auto max-w-full rounded-lg"
                                src={img9}
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="grid gap-4">
                        <div>
                            <img
                                className="h-auto max-w-full rounded-lg"
                                src={img12}
                                alt=""
                            />
                        </div>
                        <div>
                            <img
                                className="h-auto max-w-full rounded-lg"
                                src={img1}
                                alt=""
                            />
                        </div>
                        <div>
                            <img
                                className="h-auto max-w-full rounded-lg"
                                src={img8}
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default New;
import { useNavigate } from 'react-router-dom';
import img from '../../../assets/about.jpg'
import Title from '../../common/Title/Title';

const About_Us = () => {
    const navigate = useNavigate();
    const goToAbout = () => {
        navigate("/about")
    }
    return (
        <div className=''>
            <div className="items-center w-10/12 grid-cols-2 mx-auto overflow-x-hidden lg:grid md:py-14 lg:py-24 xl:py-14 lg:mt-3 xl:mt-5" data-aos="fade-right" data-aos-duration="800">
                <div className="pr-2 md:mb-14 py-14 md:py-0">
                   <Title
                   title='About us'
                   subTitle='Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam non repellendus impedit? Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, tenetur quibusdam! Sint!'></Title>
                   <button onClick={goToAbout} className='btn-fill'>Learn More</button>
                </div>

                <div className="pb-0 overflow-hidden md:p-10 lg:p-0 sm:pb-0 rounded-3xl border-4 border-pink-400 border-dotted">
                    <img id="heroImg1" className="transition-all duration-300 ease-in-out hover:scale-105 lg:w-full sm:mx-auto sm:w-4/6 sm:pb-12 lg:pb-0" src={img} alt="Awesome hero page image" width="500" height="488"/>
                </div>
            </div>
        </div>
    );
};

export default About_Us;
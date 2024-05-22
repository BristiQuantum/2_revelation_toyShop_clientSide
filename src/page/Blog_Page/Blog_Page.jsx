
import Title from '../common/Title/Title';
import Blog_Post from './Blog_Post';

const Blog_Page = () => {
    return (
        <div className="flex">
            <div className="md:basis-[75%] px-14 pt-24">
                <div className="text-center mb-16 md:w-[80%] mx-auto">
                    <Title
                        title='Checks Out Latest Blog Post'
                        subTitle='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores eos quo fugiat accusamus ipsa.lorem20 Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias dolores ut eius. Praesentium eveniet voluptate expedita assumenda? Animi, vero! Repellat?'></Title>
                </div>

                <Blog_Post></Blog_Post>
            </div>


            <div className="basis-[25%] bg-[#48322C] p-5 pt-24 hidden md:block">
                <div className="">
                    <h3 className='text-xl font-bold text-center underline'>Lorem, ipsum dolor.</h3>
                    <div className="pt-5 flex flex-col items-center font-semibold space-y-2">
                        <p >Lorem ipsum dolor sit.</p>
                        <p>Lorem ipsum dolor sit.</p>
                        <p>Lorem ipsum dolor sit.</p>
                        <p className='text-lg font-extrabold text-orange-900'>Lorem ipsum dolor sit.</p>
                        <p>Lorem ipsum dolor sit.</p>
                        <p>Lorem ipsum dolor sit.</p>
                        <p>Lorem ipsum dolor sit.</p>
                        <p>Lorem ipsum dolor sit.</p>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Blog_Page;
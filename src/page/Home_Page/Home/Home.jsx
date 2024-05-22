import img from '../../../assets/home/t.png'

const Home = () => {
    return (
        <div className="home" style={{ backgroundImage: `url(${img})`, backgroundPosition: 'center' }}>
            <div className="sm:pl-48 space-y-5">
                <h1 className='h1'>Get a new friend !</h1>
                <button className='btn-fill'>Shop Now</button>
            </div>
        </div>
    );
};

export default Home;
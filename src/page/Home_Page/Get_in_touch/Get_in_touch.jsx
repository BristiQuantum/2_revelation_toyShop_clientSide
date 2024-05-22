


const Get_in_touch = () => {
    return (
        <div className="flex flex-col md:flex-row set-p pb-0 gap-7">
            <div className="bg-[#EDE4D5] flex-grow flex flex-col lg:flex-row items-center justify-center p-6 gap-5 rounded-lg">
                <div className="">
                    <p className="text-[#67564e] font-bold text-lg">Join our newsletter</p>
                </div>
                <form action="#" className="flex flex-col sm:flex-row flex-grow items-center gap-2">
                    <input type="email" name="email" id="" placeholder="Your email" className=" inline-block box-border px-5 py-4 text-xs rounded-md border-t-2 border-[#826760] placeholder:text-[#826760] focus:outline-none w-full"/>
                        <input type="submit" value="Subscribe" className="btn-fill inline-block box-border py-4 px-6 text-xs"/>
                  
                </form>
            </div>
            <div className="bg-[#CF4D75] rounded-lg px-6 py-9 text-center border-8 border-[#E9658D] ">
                <p className="text-white text-sm font-bold mb-3">Take a part in our competition</p>
                <span className="text-[#48322c] text-lg">and get 80% discount for shopping</span>
            </div>
        </div>
    );
};

export default Get_in_touch;
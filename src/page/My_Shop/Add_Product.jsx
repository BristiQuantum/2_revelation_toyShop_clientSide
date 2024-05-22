import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../firebase/AuthProvider";


const Add_Product = () => {
    const {user} = useContext(AuthContext)

    const handleUpdate = (e) => {
        e.preventDefault();
        const form = e.target;
        const name =form.name.value;
        const price =form.price.value;
        const catagory =form.catagory.value;
        const url =form.url.value;
        const email =user?.email;
        const info = {
            Name: name,
            Price: price,
            Catagory: catagory,
            Photo_url: url,
            Email: email,
        }
        console.log(info);

        // mongoDb operation 
        fetch('https://two-revelation-toyshop-serverside.onrender.com/products', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(info)
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: 'success!',
                        text: 'successfully added the coffee',
                        icon: 'success',
                        confirmButtonText: 'ok'
                    })
                }
                form.reset();
            })
    }
    return (
        <div className="set-p">

            <div className="set-p pb-0">
                <main className="mx-auto flex py-10 sm:py-0 sm:min-h-screen w-full items-center justify-center bg-[#48322C] text-white rounded-3xl">
                    <form onSubmit={handleUpdate} className="flex mx-3 sm:mx-0 w-[30rem] flex-col space-y-5">
                        <div className="text-center text-2xl sm:text-4xl font-medium text-[#ea5f8a] mb-7">Addd your product info here</div>

                        <div className="w-full transform bg-transparent text-lg duration-300 focus-within:border-[#ea5f8a]">
                            <input type="text" name="name" placeholder="product name" className="w-full border-2 p-4 rounded-lg bg-transparent outline-none placeholder:italic focus:outline-none " autoComplete="off"/>
                        </div>

                        <div className="w-full transform bg-transparent text-lg duration-300 focus-within:border-[#ea5f8a]">
                            <input type="text" name="price" placeholder="product price" className="w-full border-2 p-4 rounded-lg bg-transparent outline-none placeholder:italic focus:outline-none" autoComplete="off"/>
                        </div>
                        <div className="w-full transform bg-transparent text-lg duration-300 focus-within:border-[#ea5f8a]">
                            <input type="text" name="catagory" placeholder="product catagory" className="w-full border-2 p-4 rounded-lg bg-transparent outline-none placeholder:italic focus:outline-none" autoComplete="off"/>
                        </div>
                        <div className="w-full transform bg-transparent text-lg duration-300 focus-within:border-[#ea5f8a]">
                            <input type="text" name="url" placeholder="photo url" className="w-full border-2 p-4 rounded-lg bg-transparent outline-none placeholder:italic focus:outline-none" autoComplete="off"/>
                        </div>
                        <input className="transform rounded-lg bg-[#ea5f8a] py-4  font-bold text-[#48322C] " type="submit" value="Add Product" />
                        


                    </form>
                </main>
            </div>
        </div>
    );
};

export default Add_Product;

import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const Update_Product = () => {
   

    const loadData = useLoaderData();
    const { Name, Price, Photo_url, Catagory, _id } = loadData;

    const handleUpdate = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const category = form.catagory.value;
        const price = form.price.value;
        const photo = form.photo.value;

        const productInfo = {
            Name: name,
            Catagory: category,
            Price: price,
            Photo_url: photo,
        }


        // console.log(productInfo)

        fetch(`https://two-revelation-toyshop-serverside.onrender.com/products/${_id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(productInfo),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'success',
                        text: `successfully updated ${Name} information`,
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                }
                form.reset();
            });


    }



    return (
        <div className="set-p pt-20">
            <div className="">
                <main className="mx-auto flex py-16 sm:py-0 sm:min-h-screen w-full items-center justify-center bg-[#48322C] text-white rounded-3xl">
                    <section className="space-y-5">
                        <div className="text-center w-full text-2xl sm:text-4xl font-medium text-[#ea5f8a] mb-12">Update <span className="text-yellow-500">{Name}</span> information:</div>

                        <form className="flex mx-3 sm:mx-0 sm:w-[30rem] flex-col space-y-5" onSubmit={handleUpdate}>
                            <div className="w-full transform bg-transparent text-lg duration-300 focus-within:border-[#ea5f8a]">
                                <input type="text" name="name" defaultValue={Name} className="w-full border-2 p-4 rounded-lg bg-transparent outline-none placeholder:italic focus:outline-none box-border" />
                            </div>

                            <div className="w-full transform bg-transparent text-lg duration-300 focus-within:border-[#ea5f8a]">
                                <input type="text" name="price" defaultValue={Price} className="w-full border-2 p-4 rounded-lg bg-transparent outline-none placeholder:italic focus:outline-none box-border" />
                            </div>
                            <div className="w-full transform bg-transparent text-lg duration-300 focus-within:border-[#ea5f8a]">
                                <input type="text" name="catagory" defaultValue={Catagory} className="w-full border-2 p-4 rounded-lg bg-transparent outline-none placeholder:italic focus:outline-none box-border" />
                            </div>
                            <div className="w-full transform bg-transparent text-lg duration-300 focus-within:border-[#ea5f8a]">
                                <input type="text" name="photo" defaultValue={Photo_url} className="w-full border-2 p-4 rounded-lg bg-transparent outline-none placeholder:italic focus:outline-none box-border" />
                            </div>

                            <input className="transform rounded-lg bg-[#ea5f8a] py-4  font-bold text-[#48322C] cursor-pointer transition-all ease-in-out hover:bg-[#b42a56] hover:text-white duration-300" type="submit" value="Update" />
                        </form>
                    </section>
                </main>
            </div>
        </div>
    );
};

export default Update_Product;
import React from "react";
import { CiHeart } from "react-icons/ci";
import { FaEye } from "react-icons/fa";
export default function FoodPage() {
    const [products, setProducts] = React.useState([])
    React.useEffect(() => {
        getAllProducts();
    },[]);
    const getAllProducts = async () => {
        const res = await fetch("https://dummyjson.com/products");
        const data = await res.json();
        const result = data.products;
        setProducts(result);
       
    }
   
   
    return (
        <>

            <div className="bg-gray-100 h-full pt-12 ">  
                
                    <div className="flex p-3">
                        <span className="border border-amber-600 mx-3"></span>
                        <p className="text-amber-600 ">Our Product.</p>
                    </div>

                <div className="mx-6 font-bold text-xl">
                    Explore Our Product.
                </div>

                <div className="food-cards flex flex-wrap">
                    {
                        products.map((item, index ) => {
                            return (
                                <div className="card group cursor-pointer border border-amber-50 rounded-2xl bg-white m-8 p-5 w-90 h-100 relative " key={index}>

                                    <div className="w-full h-45 object-contain mb-4">

                                    <img className="rounded-2xl border border-amber-200 mb-2 w-full h-full " src={item.images[0]} alt="food" />
                                    </div>
                                    <div className="food-card-details">
                                            <div className="food-card-price font-bold text-red-700">
                                                ${item.price}
                                            </div>
                                        <div className="food-card-title font-bold mb-2">
                                            {item.title}
                                        </div>
                                        <div className="line-clamp-2 overflow-hidden text-gray-600 "  >
                                            {item.description}
                                        </div>
                                        <div className="icon opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                         
                                            <CiHeart size={20} className="text-3xl  absolute top-14 right-8  " />
                                            <FaEye size={20}  className="text-2xl  absolute top-24 right-8  " />

                                        </div>
                                        <button className="bg-black text-white py-3 rounded-xl mt-4 w-full hover:bg-white hover:text-black hover:border-black hover:border-2 cursor-pointer translation-all duration-300 ease-in-out
                                            ">Add To Cart</button>
                                    </div>
                                </div>  
                            )
                        })
                    }
                   
                    
                </div>

            </div>


        </>
    );
}



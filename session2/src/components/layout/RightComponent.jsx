import React, { Fragment } from 'react';
import { PiHamburgerThin } from "react-icons/pi";
import { FaPizzaSlice } from "react-icons/fa";
import { GiChickenLeg } from "react-icons/gi";
import { GiPotato } from "react-icons/gi";

export default function RightComponent() {
    const menuData = [
        {
            id: 1,
            title: "Burger",
            icon: <PiHamburgerThin size={20} />,
            isActive: true, // هذا هو العنصر النشط
        }, 
        {
            id: 2,
            title: "Pizza",
            icon: <FaPizzaSlice size={20} />, 
            isActive: false,
        },
        {
            id: 3,
            title: "Chicken",
            icon: <GiChickenLeg size={20} />,
            isActive: false, 
        },
        {
            id: 4,
            title: "Potato",
            icon: <GiPotato size={20} />,
            isActive: false,
        },
        {
            id: 8,
            title: "Burger",
            icon: <PiHamburgerThin size={20} />,
            isActive: false, // هذا هو العنصر النشط
        }, 
        {
            id: 5,
            title: "Pizza",
            icon: <FaPizzaSlice size={20} />, 
            isActive: false,
        },
        {
            id: 6,
            title: "Chicken",
            icon: <GiChickenLeg size={20} />,
            isActive: false, 
        },
        {
            id: 7,
            title: "Potato",
            icon: <GiPotato size={20} />,
            isActive: false,
        }
    ];

    const products = [
        {
            id: 1,
            title: "Vegetable Burger",
            image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2VyfGVufDB8fDB8fHww",
            price: "$32",
            originalPrice: "$40",
            reviews: "2.5K",
            wishlist: "Wishlist",
            orderNow: "Order Now",
        },
        {
            id: 2,
            title: "Veggie Pizza",
            image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2VyfGVufDB8fDB8fHww",
            price: "$28",
            originalPrice: "$35",
            reviews: "1.8K",
            wishlist: "Wishlist",
            orderNow: "Order Now",
        },
        {
            id: 3,
            title: "Grilled Chicken Sandwich",
            image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2VyfGVufDB8fDB8fHww",
            price: "$25",
            originalPrice: "$30",
            reviews: "2.1K",
            wishlist: "Wishlist",
            orderNow: "Order Now",
        },
        {
            id: 4,
            title: "Vegetable Burger",
            image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2VyfGVufDB8fDB8fHww",
            price: "$32",
            originalPrice: "$40",
            reviews: "2.5K",
            wishlist: "Wishlist",
            orderNow: "Order Now",
        },
        {
            id: 5,
            title: "Veggie Pizza",
            image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2VyfGVufDB8fDB8fHww",
            price: "$28",
            originalPrice: "$35",
            reviews: "1.8K",
            wishlist: "Wishlist",
            orderNow: "Order Now",
        },
        {
            id: 6,
            title: "Grilled Chicken Sandwich",
            image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2VyfGVufDB8fDB8fHww",
            price: "$25",
            originalPrice: "$30",
            reviews: "2.1K",
            wishlist: "Wishlist",
            orderNow: "Order Now",
        }
    ];

    return (
       
           <div className='flex  flex-wrap gap-5.5 py-2.5 px-3 rounded-md'>
                {menuData.map((link) => (
                    <div key={link.id}>
                        <div
                            className={`border-2 m-2 ${
                                link.isActive ? "border-[#EE5733]" : "border-gray-300"
                            } rounded-md p-2 cursor-pointer flex items-center gap-2 ${
                                link.isActive ? "bg-[rgba(238,88,51,0.10)]" : "bg-white"
                            } ${link.isActive ? "text-[#EE5733] font-semibold" : "text-black"}`}
                        >
                            <div className="flex-shrink-0">{link.icon}</div>
                            <p className="text-sm font-semibold leading-6">{link.title}</p>
                        </div>
                    </div>
                ))}
            
                <div className="heade flex gap-6 mt-22 items-start">
                    <h1 className="text-xl font-bold border-b-2 border-amber-400">Popular</h1>
                    <h1 className="text-xl font-bold">Recent</h1>
                </div>
            
                <div className="flex gap-4 flex-wrap mt-4">
                    {products.map((product) => (
                        <div key={product.id} className="bg-white p-4 rounded shadow min-w-70">
                            <div className="text-center">
                                <img src={product.image} alt="" className='w-full h-40' />
                                <h3 className='font-bold mt-2 text-left '>{product.title}</h3>
                                <div className='flex items-center justify-between mt-2 mb-2'>

                                    <div className='flex items-end '>
                                        <p className="text-yellow-500 font-bold text-xl">{product.price}</p>
                                        <p className="text-gray-500 line-through">{product.originalPrice}</p>

                                    </div>
                                    <p className="text-yellow-500">⭐{product.reviews}</p>
                                </div>
                            </div>
                            <div className="flex justify-between mt-2">
                                <button className="bg-gray-200 px-2 py-1 rounded">Wishlist</button>
                                <button className="bg-orange-500 text-white px-2 py-1 rounded">Order Now</button>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
            
        
        
       
        
    );
}
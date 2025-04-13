import React from 'react';
import { PiHamburgerThin } from "react-icons/pi";
import { FaPizzaSlice } from "react-icons/fa";
import { GiChickenLeg } from "react-icons/gi";

export default function CartPage() {
    const cartItems = [
        {
            id: 1,
            title: "Vegetable Burger",
            icon: <PiHamburgerThin size={20} />,
            price: 25,
            quantity: 3,
        },
        {
            id: 2,
            title: "Veggie Pizza",
            icon: <FaPizzaSlice size={20} />,
            price: 30,
            quantity: 2,
        },
        {
            id: 3,
            title: "Grilled Chicken Sandwich",
            icon: <GiChickenLeg size={20} />,
            price: 20,
            quantity: 1,
        },
    ];

    // حساب الإجمالي subtotal
    const calculateSubtotal = () => {
        return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    };

    // حساب الضرائب tax
    const calculateTax = () => {
        const subtotal = calculateSubtotal();
        return subtotal * 0.06; // افتراضيًا: ضريبة بنسبة 6%
    };

    // حساب المجموع النهائي total payment
    const calculateTotalPayment = () => {
        const subtotal = calculateSubtotal();
        const tax = calculateTax();
        return subtotal - tax;
    };

    return (
        <div>
            {/* قسم المنتجات */}
            <div className="bg-white p-4 rounded shadow">
                <h2 className="text-lg font-bold">Cart Items</h2>
                {cartItems.map((item) => (
                    <div key={item.id} className="flex items-center gap-4 my-2">
                        <div className="flex-shrink-0">{item.icon}</div>
                        <div>
                            <p className="font-semibold">{item.title}</p>
                            <p className="text-yellow-500">${item.price}</p>
                        </div>
                        <div className="flex-grow text-right">
                            <span>x{item.quantity}</span>
                        </div>
                    </div>
                ))}
            </div>

            {/* قسم ملخص الدفع */}
            <div className="bg-white p-4 mt-4 rounded shadow">
                <h2 className="text-lg font-bold">Payment Summary</h2>
                <div className="flex justify-between">
                    <p>Subtotal</p>
                    <p>${calculateSubtotal()}</p>
                </div>
                <div className="flex justify-between">
                    <p>Tax</p>
                    <p>-${calculateTax().toFixed(2)}</p>
                </div>
                <div className="flex justify-between">
                    <p>Total Payment</p>
                    <p>${calculateTotalPayment().toFixed(2)}</p>
                </div>
            </div>

            {/* قسم طرق الدفع */}
            <div className="bg-white p-4 mt-4 rounded shadow">
                <h2 className="text-lg font-bold">Payment Method</h2>
                <div className="flex gap-4">
                    <img src="/visa-icon.png" alt="Visa" />
                    <img src="/paypal-icon.png" alt="PayPal" />
                </div>
            </div>

            {/* زر تقديم الطلب */}
            <button className="bg-orange-500 text-white px-4 py-2 mt-4 rounded w-full">Place An Order Now</button>
        </div>
    );
}
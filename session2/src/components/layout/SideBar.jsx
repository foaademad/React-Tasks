import React from "react";
import MenuLink from "../menuLink/MenuLink";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { CiShop } from "react-icons/ci";

export default function SideBar() {
    const menuLinkData = [
        {
            id: 1,
            title: "dashboard",
            icon: <MdOutlineSpaceDashboard size={20} />,
            isActive: true,
        },
        {
            id: 2,
            title: "Food Order",
            icon: <CiShop size={20} />,
            isActive: false,
        },
        {
            id: 3,
            title: "Feedback",
            icon: <CiShop size={20} />,
            isActive: false,
        },
        {
            id: 4,
            title: "messages",
            icon: <CiShop size={20} />,
            isActive: false,
        },
        {
            id: 5,
            title: "Order History",
            icon: <CiShop size={20} />,
            isActive: false,
        },
        {
            id: 6,
            title: "Payment Details",
            icon: <CiShop size={20} />,
            isActive: false,
        },
        {
            id: 7,
            title: "Customizations",
            icon: <CiShop size={20} />,
            isActive: false,
        },
    ];
    return (
        <div className="sidebar col-span-2 bg-white h-[90vh] px-6 py-2">
            {menuLinkData.map((link) => (
                <MenuLink title={link.title} icon={link.icon} isActive={link.isActive} key={link.id} />
            ))}
        </div>
    );
}

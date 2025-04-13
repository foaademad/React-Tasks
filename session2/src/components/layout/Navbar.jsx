import React from "react";
import Logo from "../common/logo/Logo";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdKeyboardArrowDown } from "react-icons/md";

export default function Navbar() {
    return (
        <nav className="navbar bg-white px-16 py-4 flex items-center justify-between h-[10vh]">
            <Logo />
            <div className="navbar-service flex items-center gap-4">
                <IoMdNotificationsOutline size={25} className="cursor-pointer" />
                <div className="navbar-service-user border-2 border-gray-300 p-2 rounded-md flex items-center justify-between w-60 cursor-pointer">
                    <div className="navbar-service-user-profile flex items-center gap-2">
                        <div className="user-profile bg-red-500 w-10 h-10 rounded-full"></div>
                        <span>Yousef </span>
                    </div>
                    <MdKeyboardArrowDown />
                </div>
            </div>
        </nav>
    );
}

import React from "react";

export default function MenuLink({ title, isActive, icon }) {
    return (
        <div className={`menu-link mb-2 border-2  ${isActive ? "border-[#EE5733]" : "border-gray-300"} 
        rounded-md p-2 cursor-pointer flex items-center gap-2 ${isActive ? "bg-[rgba(238,88,51,0.10)]" : "bg-white"} 
        ${isActive ? "text-[#EE5733] font-semibold" : "text-black"}`}>
            {icon}
            <span className={`capitalize `}>{title}</span>
        </div>
    );
}

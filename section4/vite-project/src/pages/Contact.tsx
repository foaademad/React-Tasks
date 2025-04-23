

import { NavLink, Outlet } from "react-router-dom";

export default function Contact() {
  return (
    <>
      <div className="relative">
        <div className="absolute bg-gray-400 p-12 top-100 left-3.5 rounded-2xl h-50 flex gap-3 flex-col items-center justify-center">
          <NavLink to="contactForm" className="text-xl text-white">
            Contact Us Form
          </NavLink>
          <NavLink to="emails" className="text-xl text-white">
            Emails
          </NavLink>
          <NavLink to="locations" className="text-xl text-white">
            Locations
          </NavLink>
          <NavLink to="phoneNumber" className="text-xl text-white">
            Phone Number
          </NavLink>
        </div>
      </div>
      <div className="relative flex gap-3 flex-col items-center justify-center mt-60 p-4">
        <Outlet /> {/* هنا سيتم عرض المكونات المتداخلة */}
      </div>
    </>
  );
}
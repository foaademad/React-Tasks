import { NavLink } from "react-router-dom";

export default function Nanbar() {
  return (
    <>
      <nav className="flex items-center justify-around py-3 text-xl bg-white shadow-xl ">
        <h2 className="text-2xl">Logo</h2>
        <ul className="flex items-center gap-3.5">
          <li>
            <NavLink to={"./"}>Home</NavLink>
          </li>

          <li>
            <NavLink to={"/about"}>About</NavLink>
          </li>
          <li>
            <NavLink to={"/Service"}>Service</NavLink>
          </li>
          <li>
            <NavLink to={"/contact"}>Contact</NavLink>
          </li>
        </ul>
        <button className="btn rounded bg-gray-600 text-white px-3 py-1">
          login
        </button>
      </nav>
    </>
  );
}

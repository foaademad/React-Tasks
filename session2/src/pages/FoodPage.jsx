import React, { Fragment } from "react";
import Navbar from "../components/layout/Navbar";
import SideBar from "../components/layout/SideBar";
import Content from "../components/layout/Content";


export default function FoodPage() {
    return (
        <Fragment>
            <Navbar />
            <main className="bg-gray-200 h-full grid grid-cols-12">
                <SideBar />
                <Content/>
               
            </main>
        </Fragment>
    );
}

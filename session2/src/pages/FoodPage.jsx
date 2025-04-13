import React, { Fragment } from "react";
import Navbar from "../components/layout/Navbar";
import SideBar from "../components/layout/SideBar";
import Content from "../components/layout/Content";


export default function FoodPage() {
    return (
        <Fragment>
            <Navbar />
            <main className="bg-gray-300 h-[90vh] grid grid-cols-12">
                <SideBar />
                {/* <Content/> */}
                {/* <div className="content  col-span-10 h-[90vh] p-8">
                    Content
                </div> */}
            </main>
        </Fragment>
    );
}

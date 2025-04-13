import React from "react";
import Navbar from "../components/navbar/Navbar";
import Banner from "../components/banner/Banner";
import Footer from "../components/footer/Footer";
import Accordion from "../components/common/accordion/Accordion";
import AccodionItem from "../components/common/accodionItem/AccodionItem";

export default function HomePage() {
    const accodionData = [
        {
            id: 1,
            title: "Accodion One",
            body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo maiores, tenetur ea illum obcaecati distinctio",
        },
        {
            id: 2,
            title: "Accodion Two",
            body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo maiores, tenetur ea illum obcaecati distinctio",
        },
        {
            id: 3,
            title: "Accodion Three",
            body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo maiores, tenetur ea illum obcaecati distinctio",
        },
        {
            id: 4,
            title: "New Accordion",
            body: "New Accordion Description",
        },
    ];
    return (
        <div>
            <Navbar />
            <Banner />
            {accodionData.map((item, index) => (
                <Accordion title={item.title} key={item.id}>
                    <AccodionItem content={item.body} />
                </Accordion>
            ))}
            {/* <button className="bg-sky-500 hover:bg-sky-950 hover:text-white duration-1000  p-6 cursor-pointer rounded-full">Tailwind Get Started</button> */}
            <div className="containerItem xl:p-16 lg:p-14 md:p-8 p-4 grid xl:gap-10 lg:gap-8 md:gap-4 gap-4 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
                <div className="box bg-red-800 w-full h-40 rounded-2xl"></div>
                <div className="box bg-red-800 w-full h-40 rounded-2xl"></div>
                <div className="box bg-red-800 w-full h-40 rounded-2xl"></div>
                <div className="box bg-red-800 w-full h-40 rounded-2xl"></div>
                <div className="box bg-red-800 w-full h-40 rounded-2xl"></div>
                <div className="box bg-red-800 w-full h-40 rounded-2xl"></div>
            </div>
            <Footer />
        </div>
    );
}

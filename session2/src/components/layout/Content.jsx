
import React from "react";
import Left from "./LeftComponent.jsx";
import Right from "./RightComponent.jsx";
export default function content() {
 
  return (
      <div className=" content col-span-10  p-8">
          <h1 className="text-2xl text-black font-bold ">Exprole Product</h1>
          <div className=" grid grid-cols-2 mt-12 ">
            <Right />
            <Left/>
          </div>
      </div>
  );
}
import React from "react";

const Overlay = ({ showMenu }) => {
    return <div className={` h-full w-full bg-black/25 ${showMenu && "hidden"}`}></div>;
};

export default Overlay;

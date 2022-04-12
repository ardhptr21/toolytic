import React from "react";

const ButtonSecondary = ({ children, type = "button", className = "" }) => {
    return (
        <button
            type={type}
            className={`px-8 flex justify-center items-center gap-3 shadow-right-bottom py-3 font-bold text-black transition duration-300 bg-gray-200 rounded-full hover:bg-gray-300 ${className}`}
        >
            {children}
        </button>
    );
};

export default ButtonSecondary;

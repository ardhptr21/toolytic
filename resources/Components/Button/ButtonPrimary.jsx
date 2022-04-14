import React from "react";

const ButtonPrimary = ({ children, type = "button", className = "" }) => {
    return (
        <button
            type={type}
            className={`px-8 btn flex justify-center items-center gap-3 py-3 font-bold text-white transition duration-300 bg-blue-500 rounded-full shadow-right-bottom hover:bg-blue-600 ${className}`}
        >
            {children}
        </button>
    );
};

export default ButtonPrimary;

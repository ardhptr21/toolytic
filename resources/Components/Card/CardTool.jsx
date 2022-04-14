import React from "react";

const CardTool = ({ title, description, icon }) => {
    return (
        <div className="w-full p-5 rounded-md bg-gray-50">
            <div className="mb-5 overflow-hidden bg-gray-100 rounded-full w-14 h-14">
                <img
                    src={icon}
                    alt={title.toLowerCase()}
                    className="object-cover object-center w-full h-full"
                />
            </div>
            <div>
                <h4 className="font-bold">{title}</h4>
                <p className="text-sm">{description}</p>
            </div>
        </div>
    );
};

export default CardTool;

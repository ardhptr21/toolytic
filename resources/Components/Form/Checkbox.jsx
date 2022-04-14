import React from "react";

const Checkbox = ({ children, name, value = "" }) => {
    return (
        <div className="flex items-center justify-center gap-3 text-md">
            <input
                type="checkbox"
                value={value}
                className="relative flex items-center justify-center w-5 h-5 border-2 border-black rounded appearance-none peer after:invisible checked:after:visible checked:border-blue-500 after:absolute after:rounded-full after:w-2 after:h-2 after:bg-blue-500"
                name={name}
                id={name}
            />
            <label
                htmlFor={name}
                className="select-none peer-checked:text-blue-500"
            >
                {children}
            </label>
        </div>
    );
};

export default Checkbox;

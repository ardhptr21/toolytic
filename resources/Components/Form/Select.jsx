import React from "react";

const Select = ({ children, className, error, note, ...props }) => {
    return (
        <div className="text-left">
            <select
                {...props}
                className={`w-full px-6 py-2 border border-gray-400 rounded-full shadow-inner outline-1 outline-blue-500 ${
                    className ? className : ""
                }`}
            >
                {children}
            </select>
            {(error || note) && (
                <div className="flex flex-col mt-1">
                    {note && (
                        <small className="text-gray-500">
                            Note: please add @ in the end
                        </small>
                    )}
                    {error && (
                        <small className="text-red-500">
                            *Invalid email, please provide valid email
                        </small>
                    )}
                </div>
            )}
        </div>
    );
};

export default Select;
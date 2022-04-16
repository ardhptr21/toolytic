import React from "react";

const Textarea = ({ children, className, error, note, ...props }) => {
    return (
        <div className="text-left">
            <textarea
                {...props}
                className={`w-full px-6 py-2 border border-gray-400 rounded-xl shadow-inner outline-1 outline-blue-500 ${
                    className ? className : ""
                }`}
            >
                {children}
            </textarea>
            {(error || note) && (
                <div className="flex flex-col mt-1">
                    {note && <small className="text-gray-500">{note}</small>}
                    {error && <small className="text-red-500">{error}</small>}
                </div>
            )}
        </div>
    );
};

export default Textarea;

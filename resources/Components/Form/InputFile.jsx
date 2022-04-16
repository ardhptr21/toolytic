import React from "react";
import { BsFillImageFill } from "react-icons/bs";

const InputFile = ({ placeholder, ...props }) => {
    return (
        <div className="flex items-center justify-center w-full">
            <label className="flex flex-col w-full h-32 border-4 border-dashed rounded-xl hover:border-blue-300">
                <div className="flex flex-col items-center justify-center pt-7">
                    <BsFillImageFill size={30} className="text-gray-400" />
                    <p className="pt-1 text-sm tracking-wider text-gray-400">
                        {placeholder}
                    </p>
                </div>
                <input type="file" className="hidden" {...props} />
            </label>
        </div>
    );
};

export default InputFile;

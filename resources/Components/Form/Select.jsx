import React from "react";
import Select from "react-select";

const CustomSelect = ({ error, note, ...props }) => {
    return (
        <div>
            <Select
                styles={{
                    control: (provided, state) => ({
                        ...provided,
                        borderRadius: "0.75rem",
                        padding: "0.15rem 0.75rem",
                        border: "1px solid rgb(156 163 175)",
                    }),
                }}
                {...props}
            />
            {(error || note) && (
                <div className="flex flex-col mt-1">
                    {note && <small className="text-gray-500">{note}</small>}
                    {error && <small className="text-red-500">*{error}</small>}
                </div>
            )}
        </div>
    );
};

export default CustomSelect;

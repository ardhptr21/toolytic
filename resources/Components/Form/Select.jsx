import React from "react";
import Select from "react-select";

const CustomSelect = (props) => {
    return (
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
    );
};

export default CustomSelect;

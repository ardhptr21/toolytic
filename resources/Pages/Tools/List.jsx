import React from "react";
import Checkbox from "../../Components/Form/Checkbox";
import CardTool from "../../Components/Card/CardTool";

const List = () => {
    return (
        <section className="flex items-start justify-between gap-10">
            <div
                className="flex flex-col items-start justify-center w-full gap-10 p-5 bg-gray-50 shadow-right-bottom"
                style={{ flex: 0.5 }}
            >
                <div className="w-full space-y-2">
                    <h3 className="text-xl font-bold">Categories</h3>
                    <hr className="w-full h-[3px] bg-gray-200" />
                </div>
                <div className="flex flex-col items-start justify-center gap-5">
                    <Checkbox name="text-editor">Text Editor</Checkbox>
                    <Checkbox name="ui-ux">UI/UX</Checkbox>
                </div>
            </div>
            <div style={{ flex: 2 }}>
                <div className="space-y-3">
                    <h1 className="text-4xl font-bold">
                        List Of Usefull Tools
                    </h1>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Est sint sed expedita illo, ipsa illum. Nostrum
                        optio error nesciunt, vel quia, tempore libero, ad sit
                        magni consectetur dolor sapiente minus.
                    </p>
                </div>

                <div className="grid grid-cols-4 gap-5 mt-10">
                    <CardTool
                        title="Visual Studio Code"
                        description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis sapiente consectetur iure?"
                        icon="https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_vscode_icon_130084.png"
                    />
                </div>
            </div>
        </section>
    );
};

export default List;

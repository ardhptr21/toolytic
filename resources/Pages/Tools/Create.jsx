import React from "react";
import Input from "../../Components/Form/Input";
import Textarea from "../../Components/Form/Textarea";
import ButtonPrimary from "../../Components/Button/ButtonPrimary";
import Select from "../../Components/Form/Select";
import InputFile from "../../Components/Form/InputFile";

const Create = ({ tags }) => {
    return (
        <section className="flex items-center justify-center">
            <div className="w-2/3 p-10 rounded-md shadow">
                <div className="mb-10 space-y-2 text-center">
                    <h1 className="text-2xl font-bold">Add New Tool</h1>
                    <p className="text-gray-500">
                        You look have a new awesome tool? Add it here
                    </p>
                </div>

                <form className="space-y-5">
                    <Input name="name" placeholder="Enter tool name" required />
                    <Input
                        name="site_link"
                        placeholder="Enter website link"
                        type="url"
                        required
                    />
                    <Input
                        name="video_id"
                        placeholder="Enter youtube video id"
                        note={
                            <>
                                <span className="italic">Example</span>:
                                https://youtu.be/
                                <span className="font-bold text-blue-500 underline">
                                    TmWIrBPE6Bc
                                </span>
                            </>
                        }
                    />

                    <Select
                        name="tags"
                        placeholder="Select tags"
                        isMulti={true}
                        options={tags.map((tag) => ({
                            value: tag.id,
                            label: tag.name,
                        }))}
                    />

                    <InputFile
                        accept="image/*"
                        name="icon"
                        placeholder="Select icon"
                    />

                    <Textarea
                        name="short"
                        placeholder="Enter short description"
                        rows="5"
                        required
                    ></Textarea>
                    <Textarea
                        name="description"
                        placeholder="Enter long description"
                        rows="12"
                        required
                    ></Textarea>

                    <ButtonPrimary type="submit" className="w-full">
                        Add
                    </ButtonPrimary>
                </form>
            </div>
        </section>
    );
};

export default Create;

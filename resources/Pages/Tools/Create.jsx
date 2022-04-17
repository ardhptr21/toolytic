import React, { useEffect } from "react";
import Input from "../../Components/Form/Input";
import Textarea from "../../Components/Form/Textarea";
import ButtonPrimary from "../../Components/Button/ButtonPrimary";
import Select from "../../Components/Form/Select";
import InputFile from "../../Components/Form/InputFile";
import { Inertia } from "@inertiajs/inertia";

const Create = ({ tags, store_url, errors }) => {
    useEffect(() => {
        console.log(errors);
    }, [errors]);
    const initialState = {
        name: "",
        site_link: "",
        video_id: "",
        tags: [],
        short: "",
        description: "",
    };
    const [values, setValues] = React.useState(initialState);
    const [icon, setIcon] = React.useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues((values) => ({ ...values, [name]: value }));
    };

    const handleSelectChange = (value, action) => {
        const name = action.name;

        setValues((values) => ({
            ...values,
            [name]: value.map((v) => v.value),
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        Inertia.post(
            store_url,
            { ...values, icon },
            {
                forceFormData: true,
            }
        );
    };

    return (
        <section className="flex items-center justify-center">
            <div className="w-2/3 p-10 rounded-md shadow">
                <div className="mb-10 space-y-2 text-center">
                    <h1 className="text-2xl font-bold">Add New Tool</h1>
                    <p className="text-gray-500">
                        You look have a new awesome tool? Add it here
                    </p>
                </div>

                <form className="space-y-5" onSubmit={handleSubmit}>
                    <Input
                        name="name"
                        placeholder="Enter tool name"
                        required
                        onChange={handleChange}
                        value={values.name}
                        error={errors?.name}
                    />
                    <Input
                        name="site_link"
                        placeholder="Enter website link"
                        type="url"
                        required
                        onChange={handleChange}
                        value={values.site_link}
                        error={errors?.site_link}
                    />
                    <Input
                        name="video_id"
                        onChange={handleChange}
                        value={values.video_id}
                        error={errors?.video_id}
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
                        error={errors?.tags}
                        options={tags.map((tag) => ({
                            value: tag.id,
                            label: tag.name,
                        }))}
                        onChange={handleSelectChange}
                    />

                    <InputFile
                        accept="image/*"
                        name="icon"
                        placeholder="Select icon"
                        onChange={(e) => setIcon(e.target.files[0])}
                    />

                    <Textarea
                        name="short"
                        placeholder="Enter short description"
                        rows="5"
                        required
                        onChange={handleChange}
                        value={values.short}
                        error={errors?.short}
                    ></Textarea>

                    <Textarea
                        name="description"
                        placeholder="Enter long description"
                        rows="12"
                        required
                        onChange={handleChange}
                        value={values.description}
                        error={errors?.description}
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

import { Link } from "@inertiajs/inertia-react";
import React from "react";
import ButtonPrimary from "../../Components/Button/ButtonPrimary";
import Input from "../../Components/Form/Input";
import Select from "../../Components/Form/Select";

const Register = () => {
    return (
        <section className="flex flex-col items-center justify-center gap-3">
            <div className="p-10 rounded-md shadow w-96">
                <div className="mb-10 space-y-2 text-center">
                    <h1 className="text-2xl font-bold">Register</h1>
                    <p className="text-gray-500">
                        Hey admin, register a new user here
                    </p>
                </div>

                <form className="space-y-5" autoComplete="off">
                    <Input placeholder="Enter name" name="name" required />
                    <Input
                        placeholder="Enter email"
                        name="email"
                        type="email"
                        required
                    />
                    <Select
                        placeholder="Select role"
                        name="role"
                        defaultValue={{ value: "user", label: "User" }}
                        options={[
                            { value: "user", label: "User", isSelected: true },
                            { value: "admin", label: "Admin" },
                        ]}
                    />
                    <Input
                        placeholder="Enter password"
                        name="password"
                        required
                    />

                    <ButtonPrimary type="submit" className="w-full">
                        Register
                    </ButtonPrimary>
                </form>
            </div>

            <h3 className="text-gray-500">
                Don't have any account yet?{" "}
                <Link
                    href="/admin/request"
                    className="text-blue-500 hover:underline"
                >
                    Send request to admin
                </Link>
            </h3>
        </section>
    );
};

export default Register;

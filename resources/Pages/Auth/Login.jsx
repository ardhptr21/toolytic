import { Link } from "@inertiajs/inertia-react";
import React from "react";
import ButtonPrimary from "../../Components/Button/ButtonPrimary";
import Input from "../../Components/Form/Input";

const Login = () => {
    return (
        <section className="flex flex-col items-center justify-center gap-3">
            <div className="p-10 text-center rounded-md shadow w-96">
                <div className="mb-10 space-y-2">
                    <h1 className="text-2xl font-bold">Login</h1>
                    <p className="text-gray-500">
                        Hey dude, please login first
                    </p>
                </div>

                <form className="space-y-5">
                    <Input
                        name="email"
                        placeholder="Enter email"
                        type="email"
                        required
                    />
                    <Input
                        name="password"
                        placeholder="Enter password"
                        type="password"
                        required
                    />

                    <ButtonPrimary type="submit" className="w-full">
                        Login
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

export default Login;

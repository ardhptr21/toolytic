import React from "react";

const Home = () => {
    return (
        <div className="flex flex-col gap-3 justify-center items-center h-screen">
            <h1 className="text-2xl">
                Hei👋 this is a{" "}
                <span className="font-semibold italic underline">Toolytic</span>{" "}
                setup application!
            </h1>
            <p className="text-gray-600">
                Something awesome app will happen after this
            </p>
        </div>
    );
};

export default Home;

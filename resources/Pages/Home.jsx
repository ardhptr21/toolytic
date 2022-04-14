import React from "react";
import ButtonPrimary from "../Components/Button/ButtonPrimary";
import ButtonSecondary from "../Components/Button/ButtonSecondary";
import { FaGithubAlt } from "react-icons/fa";

const Home = () => {
    return (
        <section className="flex items-center justify-between gap-10">
            <div style={{ flex: 1.2 }} className="space-y-5">
                <h1 className="text-5xl font-bold leading-tight">
                    All tools for developers are packaged in one website
                </h1>
                <p className="text-xl ">
                    Are you a developer? find cool, popular and suitable tools
                    for you here
                </p>
                <div className="flex items-start gap-5">
                    <ButtonPrimary>Explore Tools</ButtonPrimary>
                    <ButtonSecondary>
                        <FaGithubAlt size={20} />
                        Contribute
                    </ButtonSecondary>
                </div>
            </div>
            <div
                style={{ flex: 2 }}
                className="flex items-center justify-center"
            >
                <img src="/images/developer.svg" className="h-96" alt="" />
            </div>
        </section>
    );
};

export default Home;

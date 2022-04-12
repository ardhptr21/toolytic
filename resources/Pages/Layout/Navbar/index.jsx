import React from "react";
import { Link } from "@inertiajs/inertia-react";
import ButtonPrimary from "../../../Components/Button/ButtonPrimary";

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between w-full py-4 shadow-lg px-28">
            <a href="/" className="flex items-center justify-center text-2xl">
                <h6 className="font-bold">tool</h6>
                <h6>ytic.io</h6>
            </a>
            <div>
                <ul className="flex items-center justify-center gap-8">
                    <li>
                        <Link className="hover:underline" href="/explore">
                            Explore
                        </Link>
                    </li>
                    <li>
                        <Link className="hover:underline" href="/About">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link href="/Submit">
                            <ButtonPrimary>Submit</ButtonPrimary>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;

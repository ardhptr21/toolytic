import React from "react";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
    return (
        <>
            <header>
                <Navbar />
            </header>
            <main className="py-20 antialiased px-28">{children}</main>
            <footer></footer>
        </>
    );
};

export default Layout;

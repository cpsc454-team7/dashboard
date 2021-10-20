import { FC } from "react";

import Navbar from "../Navbar";

const Layout: FC<{}> = ({ children }) => {
    return (
        <>
            <Navbar>Hi</Navbar>
            <main>{ children }</main>
        </>
    );
}

export default Layout;

import React from "react"
import useStyles from "./LayoutStyle"

import Header from "../HEADER/Header"
import Services from "../SERVICES/Services"
import About from "../ABOUT/About"
import Footer from "../FOOTER/Footer"

import Divider from "./divider/divider"


function Layout() {
    const classes = useStyles()

    return (
        <div className={classes.layout}>
            <Header />
                <Divider />
            <Services />
                <Divider />
            <About />
                <Divider />
            <Footer />
        </div>
    )
}
export default Layout;
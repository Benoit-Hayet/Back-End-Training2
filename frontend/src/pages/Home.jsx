import React, { useEffect, useState } from "react";
import Logo from '../assets/Logo.gif'
import Navigation from "../components/Navigation";

const Home = () => {
    return (
        <div>
            <img src={Logo} alt="logo" />
            <Navigation/>
            <h1>Home</h1>
        </div>
    );
};

export default Home;
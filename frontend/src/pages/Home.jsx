import React, { useEffect, useState } from "react";
import Logo from '../assets/Logo.gif'

const Home = () => {
    return (
        <div>
            <img src={Logo} alt="logo" />
            <Navigation/>
            <h1>ACCUEIL</h1>
            <Countries/>
        </div>
    );
};

export default Home;
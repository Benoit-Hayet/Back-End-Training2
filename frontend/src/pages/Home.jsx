import React from "react";
import Navigation from "../components/Navigation";
import Sidebar from "../components/SideBar";


const Home = () => {
  return (
    <div>
      <Navigation />
      <Sidebar />
    
        <h2>Fan de film d'horreur ?</h2>
        <p>
        <br/>Bienvenue sur The Horror Database, la
        communauté qui regroupe des passionnés.<br/><br/>Rejoignez la
        communauté et :<br/><br/>- Créez un compte afin de pouvoir ajouter des
        films à notre base de données<br/>- Likez, commentez, et apportez des
        infos exclusives sur vos films préférés<br/><br/>See you...in hell !
        </p>
    </div>
  );
};

export default Home;

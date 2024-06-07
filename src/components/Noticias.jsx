import React from "react";
import Album from "./Noticias/Album";
import Card from "./Noticias/Card";
import Header from "./HomePage/Header";

const Noticias = () => {
    return (
        <div>
            <Header/>
            <h2>Noticias y anuncios</h2>
            <Album/>
            
        </div>
    )
}

export default Noticias;
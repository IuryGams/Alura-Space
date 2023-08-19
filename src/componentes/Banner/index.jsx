import React from "react";
import banner from "./banner.png";

const Banner = ({style}) => {
    return (
        <div className={style.principal__imagem}>
            <h1>A galeria mais completa do espaço</h1>
            <img src={banner} alt="A imagem da terra vista do espaço." />
        </div>
    )
}

export default Banner
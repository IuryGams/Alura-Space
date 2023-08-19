import React from "react"
import open from "./open.png";
import favorito from "./favorito.png";

const Card = ({item, style}) => {
    return (
        <li className={style.galeria__card}>
            <img className={style.galeria__imagem} src={item.imagem} alt={item.titulo} />
            <p className={style.galeria__descricao}>{item.titulo}</p>
            <div>
                <p>{item.creditos}</p>
                <span>
                    <img src={favorito} alt="Icone coração de curtir" />
                    <img src={open} alt="Icone de abrir modal" />
                </span>
            </div>
        </li>
    )
}

export default Card
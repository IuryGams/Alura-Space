import React from "react";
import styles from "./Populares.module.scss";
import fotosPopulares from "./fotos-populares.json";
import Popular from "./Popular";
import Botao from "../Botao";

const Populares = () => {
    return(
        <aside className={styles.populares}>
            <h2>Populares</h2>
            <ul className={styles.populares__imagens}>
                {fotosPopulares.map( fotoPopular => <Popular key={fotoPopular.id} item={fotoPopular}/>)}
            </ul>
            <Botao type="button" texto="Ver mais fotos" />
        </aside>
    )
}

export default Populares
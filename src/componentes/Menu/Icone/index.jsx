import React from "react";

const Icone = ({ icone, styles } ) => {
    return(
        <li className={styles.menu__item}>
            <img src={icone.path} alt={icone.path} />
            <a href="/">{icone.link}</a>
        </li>
    )
}

export default Icone;


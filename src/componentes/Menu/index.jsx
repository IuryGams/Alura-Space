import React from "react"
import icones from "./icones.json"
import Icone from "./Icone";
import styles from "./Menu.module.scss"

const Menu = () => {
    return(
        <nav className={styles.menu}>
            <ul className={styles.menu__lista}>
                {icones.map( icone => (<Icone key={icone.id} icone={icone} styles={styles} />))}
            </ul>
        </nav>
    )
}

export default Menu
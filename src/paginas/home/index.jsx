import Cabecalho from "componentes/Cabecalho";
import Menu from "componentes/Menu";
import Banner from "componentes/Banner";
import Galeria from "componentes/Galeria";
import Rodape from "componentes/Rodape";
import Populares from "componentes/Populares";

import styles from "./PaginaInicial.module.scss";

const PaginaInicial = () => {
    return (
        <>
            <Cabecalho />
            <main >
                <section className={styles.principal}>
                    <Menu />
                    <Banner style={styles} />
                </section>
                <section className={styles.galeria}>
                    <Galeria />
                    <Populares/>
                </section>
            </main>
            <Rodape />
        </>
    )
}

export default PaginaInicial
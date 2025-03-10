import React from "react";
import Medias from "./socialMedias.json";
import styles from "./Rodape.module.scss";

const Rodape = () => {
    return(
        <footer className={styles.rodape}>
            <div className={styles.rodape__icones}>
                { Medias.map( media => {
                    return(
                        <a title={media.title} key={media.id} href={media.link} target="_blank" rel="noreferrer">
                            <img src={media.src} alt={media.alt} />
                        </a>
                    )
                })}
            </div>
            <p>Desenvolvido por Iury Menezes</p>
        </footer>
    )
}

export default Rodape


// export default function Rodape() {
//   return (
//     <footer className={styles.rodape}>
//       <div className={styles.rodape__icones}>
//         <a
//           href="https://www.facebook.com/AluraCursosOnline/"
//           target="_blank"
//           rel="noreferrer"
//         >
//           <img src={facebook} alt="ícone do facebook" />
//         </a>
//         <a
//           href="https://twitter.com/aluraonline?lang=en"
//           target="_blank"
//           rel="noreferrer"
//         >
//           <img src={twitter} alt="ícone do twitter" />
//         </a>
//         <a
//           href="https://www.instagram.com/aluraonline/?hl=en"
//           target="_blank"
//           rel="noreferrer"
//         >
//           <img src={instagram} alt="ícone do instagram" />
//         </a>
//       </div>
//       <p>Desenvolvido por Alura</p>
//     </footer>
//   );
// }

import React from "react"

const Botao = ({texto, type, style}) => {
    return (
        <button className={style} type={type}>{texto}</button>
    )
}

export default Botao 
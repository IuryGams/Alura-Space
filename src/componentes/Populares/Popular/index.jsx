import React from "react"

const Popular = ({item}) => {
    return(
        <li>
            <img src={item.path} alt={item.alt} />
        </li>
    )
}

export default Popular


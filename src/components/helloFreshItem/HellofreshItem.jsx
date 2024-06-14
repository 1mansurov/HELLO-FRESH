import "./HellofreshItem.css";

import React from 'react'

function HellofreshItem({img, title, info }) {
    return (
        <div className="hello__fersh__card">
            <img src={img} alt="" />
            <h3>{title}</h3>
            <p>{info}</p>
        </div>
    )
}

export default HellofreshItem


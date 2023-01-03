import React from "react";
import '../../styles/Filter.scss'

function Filter({ handleInput }) {
    const handleSearch = (event) => {
        handleInput(event.target.value)
    }
    return (
        <div className="divFilter">
            <div className="filter">
                <label className="filter__label" htmlFor="">Filtra por Nombre</label>
                <input className="filter__input" type="text" onChange={(handleSearch)} />
            </div>
        </div>
    )
}

export default Filter;
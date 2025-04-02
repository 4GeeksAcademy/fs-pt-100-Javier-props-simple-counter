import React from "react";


export const NuevaPrueba = ({name, age, city}) => {
//desestructuramos los atributos de la etiqueta para acceder directamente a ellos
    return (
        <p className="fs-1"> nueva prueba con objetos {name} {age} {city}</p>
    )
}
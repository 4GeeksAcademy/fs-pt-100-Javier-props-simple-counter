import React from "react";


export const Prueba = (props) => {
    //recibimos objeto props con las propiedades que establecemos como atributos de la etiqueta
    console.log(props)

    return (
        <>
            <p className="fs-1">valor de la variable en Home es: {props.nameValue}</p>
            <p className="fs-1">valor de la variable en Age es: {props.ageValue}</p>
            <p className="fs-1">valor de la variable en City es: {props.cityValue}</p>
        </>
    )
}
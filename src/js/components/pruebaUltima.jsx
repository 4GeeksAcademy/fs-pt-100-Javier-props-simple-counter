import React from "react";


export const PruebaUltima = ({objValue}) => {
console.log('-------', objValue)
const {name, age, city} = objValue
    return (
        <>
        <p className="fs-1">prueba ultima</p>
        <ul>
            <li>{name}</li>
            <li>{age}</li>
            <li>{city}</li>
        </ul>
        <ul>
            <li>{objValue.name}</li>
            <li>{objValue.age}</li>
            <li>{objValue.city}</li>
        </ul>
        </>

    )
}
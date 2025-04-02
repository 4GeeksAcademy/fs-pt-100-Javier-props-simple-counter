import React from "react";

export const MyCard = (props) => {

    return (
        <div class="card ">
            <img src={props.imgUrl} class="card-img-top img-fluid" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">{props.title}</h5>
                    <p class="card-text">{props.text}</p>
                    <a href="#" class="btn btn-primary">{props.btn}</a>
                </div>
        </div>
    )
}

//propTypes ---> definir TIPO de dato que seran tus props y 
//               si se envia cualquier otro tipo de dato, ERROR!
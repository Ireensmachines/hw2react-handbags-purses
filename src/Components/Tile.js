import React from "react";

function Tile(props){

    return (

        <section className="tile" >
        <img src={props.image} alt={props.image} />
        <h2> {props.text}</h2>
        <p> {props.paragraaf}</p>

        </section>




    );

}


export default Tile;
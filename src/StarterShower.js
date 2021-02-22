import React from "react";

function StarterShower({listImg, showPokemon}){
    const imgPokemons = listImg.map((e) =>{
        return <img src={e} />
    })

    return (
        <>
        {imgPokemons}
        </>
    )
}

export default StarterShower;
import React from "react";

function StarterShower({imgList, starterList, starter}){
    const img = imgList[starterList.indexOf(starter)];

    return (
        <img src={img}/>
    )
}

export default StarterShower;
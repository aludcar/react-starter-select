import React from "react";

function StarterSelector({list}){
    const options = list.map((e, i) => <option key={i} value={e}> {e}</option>)

    return (
        <>
            <label>Pick your favorite Pokemon </label>
            <select>
                {options}
            </select>
        </>
    )
}

export default StarterSelector;
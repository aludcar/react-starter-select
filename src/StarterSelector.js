import React from "react";

function StarterSelector({list, starter, setStarter}){
    const handleChange = (event) => setStarter(event.target.value);

    let starterList = []
    for (let i = 0; i < list.length; i++) {
        starterList.push(<option value={list[i]}>{list[i]}</option>)
    }

    return (
        <form>
        <label>
            Pick your favorite pokemon:
            <select value={starter} onChange={handleChange}>
                {starterList}
            </select>
        </label>
        </form>
    )
}

export default StarterSelector;
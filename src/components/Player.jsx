import { useState } from "react"

export default function Player({initialName,symbol,isActive, onChangeName}){
    const[playerName,setPlayerName]=useState(initialName);
    const [isEditing,setIsEditing]=useState(false);

    function clickHandle(isEditing){
           setIsEditing((editing)=>!editing);
    
    if(isEditing){
           onChangeName(symbol, playerName);
    }}
    
function handleChange(event){
      setPlayerName(event.target.value);
}

let editablePlayerName= <span className="player-name">{playerName}</span>;

if(isEditing){
    editablePlayerName=<input type="text" required  value={playerName} onChange={handleChange}></input>
    }
    return(
        <li className={isActive ? 'active': undefined}> 
        <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={clickHandle}>{isEditing?"Save":"Edit"}</button>
       </li>
    )
}
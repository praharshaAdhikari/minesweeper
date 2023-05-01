import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBomb, faFlag } from "@fortawesome/free-solid-svg-icons";

function Square(props: {bomb: boolean, status: number, touch: number, clickedLeft: Function, clickedRight: Function, gameOver: number}) {
  const squareEl = 
    props.status === 0 ? null 
      : props.status === 2 ? <FontAwesomeIcon icon={faFlag} /> 
        : props.bomb ? <FontAwesomeIcon icon={faBomb} /> 
          : props.touch === 0 ? ""
            : props.touch.toString();

  const background = 
    props.gameOver === 1 ? `bg-red-600 text-red-300`
      : props.gameOver === -1 ? `bg-blue-500 text-blue-200`
        : props.status === 0 ? `bg-green-500 hover:bg-green-200 hover:scale-110` 
          : props.status === 2 ? `bg-blue-500 hover:scale-110`
            : `bg-white`;
            
  return (
    <button 
      className = {`${background} w-10 h-10 flex justify-center items-center rounded-md duration-100 text-xs select-none`}
      onClick = {()=> props.clickedLeft()}
      onContextMenu = {(event)=> {
        event.preventDefault();
        props.clickedRight();
      }}
    >
      {squareEl}
    </button>
  )
}

export default Square;
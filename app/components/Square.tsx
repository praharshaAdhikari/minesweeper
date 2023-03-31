import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBomb } from '@fortawesome/free-solid-svg-icons'; 
import { faFlag } from '@fortawesome/free-solid-svg-icons'; 

function Square(props: {bomb: boolean, status: number, touch: number, clickedLeft: Function, clickedRight: Function}) {
  const squareEl = 
    props.status === 0 ? null 
      : props.status === 2 ? <FontAwesomeIcon icon={faFlag} /> 
        : props.bomb ? <FontAwesomeIcon icon={faBomb} /> 
          : props.touch === 0 ? "" 
            : props.touch.toString();

  const squareStyle = `${props.status===0 ? `bg-neutral-500` : `bg-neutral-300`} border-2 border-black w-8 h-8 flex justify-center items-center cursor-pointer`;
  return (
    <span 
      className = {squareStyle} 
      onClick = {()=> props.clickedLeft()} 
      onContextMenu = {(event)=> {
        event.preventDefault();
        props.clickedRight();
      }}
      >
      {squareEl}
    </span>
  )
}

export default Square;
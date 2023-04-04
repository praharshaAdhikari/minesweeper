import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBomb, faFlag } from '@fortawesome/free-solid-svg-icons';

function Square(props: {bomb: boolean, status: number, touch: number, clickedLeft: Function, clickedRight: Function, gameOver: number}) {
  const squareEl = 
    props.status === 0 ? null 
      : props.status === 2 ? <FontAwesomeIcon icon={faFlag} /> 
        : props.bomb ? <FontAwesomeIcon icon={faBomb} /> 
          : props.touch === 0 ? "" 
            : props.touch.toString();

  const background = 
    props.gameOver !== 0 ? `bg-red-600` : 
      props.status === 0 ? `bg-green-500 hover:bg-green-200 hover:scale-110` 
        : props.status === 2 ? `bg-blue-500 hover:scale-110`
          : `bg-white`;
  return (
    <span 
      className = {`${background} w-12 h-12 flex justify-center items-center cursor-pointer rounded-md duration-500`}
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
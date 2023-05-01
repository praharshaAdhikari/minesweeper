import { log } from 'console';
import React from 'react'

function Difficulty(props: {label: string, clicked: Function, current: string}) {
  return (
    <button 
      className={`${props.label === props.current ? `bg-red-500` : `bg-green-600`} rounded-md text-xs uppercase w-20 h-8 flex items-center justify-center active:scale-90 duration-200 font-bold select-none`}
      onClick={() => props.clicked()}
    >
      {props.label}
    </button>
  )
}

export default Difficulty;
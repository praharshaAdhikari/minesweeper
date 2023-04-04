import { log } from 'console';
import React from 'react'

function Difficulty(props: {label: string, clicked: Function, current: string}) {
  return (
    <div 
      className={`${props.label === props.current ? `bg-red-500` : `bg-green-600`} rounded-md text-sm uppercase w-24 h-10 flex items-center justify-center active:scale-90 duration-200 cursor-pointer font-bold`}
      onClick={() => props.clicked()}
    >
      {props.label}
    </div>
  )
}

export default Difficulty;
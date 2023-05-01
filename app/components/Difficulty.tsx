import React from 'react'

function Difficulty(props: {label: string, clicked: Function, current: string}) {
  return (
    <button 
      className={`${props.label === props.current ? `bg-red-500` : `bg-green-600`} rounded-md sm:text-sm text-[9px] uppercase sm:w-20 w-12 sm:h-8 h-6 flex items-center justify-center active:scale-90 duration-200 select-none`}
      onClick={() => props.clicked()}
    >
      {props.label}
    </button>
  )
}

export default Difficulty;
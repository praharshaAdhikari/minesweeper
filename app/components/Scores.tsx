import React from 'react'

const Scores = (props: {easy: string, mid: string, hard: string}) => {
  return (
    <div className="text-neutral-200 flex flex-col justify-center items-center bg-neutral-700 w-full sm:h-auto h-60">
        <div className="text-2xl font-bold uppercase px-10 sm:pt-5 sm:pb-0 pb-5">Score</div>
        <div className="text-lg my-3">
            <div className="py-1 sm:w-72 w-56 flex justify-between"><span className="uppercase">Easy</span> <span>{props.easy}</span></div>
            <div className="py-1 sm:w-72 w-56 flex justify-between"><span className="uppercase">Mid</span> <span>{props.mid}</span></div>
            <div className="py-1 sm:w-72 w-56 flex justify-between"><span className="uppercase">Hard</span> <span>{props.hard}</span></div>
        </div>
    </div>
  )
}

export default Scores;
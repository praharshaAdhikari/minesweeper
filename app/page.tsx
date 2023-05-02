'use client';
import { useState } from 'react'
import Header from './components/Header'
import Grid from './components/Grid'
import Scores from './components/Scores';

export default function Home() {
  const [squares, setSquares] = useState(49);

  return (
    <div>
      <Header clicked = {(setNumber: number) => setSquares(setNumber)}/>
      <div className="bg-neutral-900 flex flex-col items-center pt-10 h-full">
        <Grid totalSquares={squares}/>
        <Scores easy={"00 : 00 : 00 : 00"} mid={"00 : 00 : 00 : 00"} hard={"00 : 00 : 00 : 00"}/>
      </div>
    </div>
  )
}
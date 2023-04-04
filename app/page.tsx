'use client';
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { Inter } from 'next/font/google'
import Header from './components/Header'
import Grid from './components/Grid'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [squares, setSquares] = useState(49);

  return (
    <div>
      <Header clicked = {(setNumber: number) => setSquares(setNumber)}/>
      <div className="bg-neutral-900 flex justify-center items-start pt-10 h-screen">
        <Grid totalSquares={squares}/>
      </div>
    </div>
  )
}

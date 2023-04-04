'use client';
import React, { useState } from 'react'
import Difficulty from './Difficulty';

function Header(props: {clicked: Function}) {
  const [difficulty, setDifficulty] = useState("easy");
  const handleClick = (squares: number, label: string) => {
    setDifficulty(label);
    props.clicked(squares);
  }
  return (
    <div className="text-4xl px-8 py-4 bg-gradient-to-t from-neutral-900 to-neutral-800 text-white border-b border-neutral-700 flex justify-between items-center">
      Minesweeper
      <div className="flex space-x-4">
        <Difficulty label = "easy" clicked = {() => handleClick(25, "easy")} current = {difficulty}/>
        <Difficulty label = "medium" clicked = {() => handleClick(49, "medium")} current = {difficulty}/>
        <Difficulty label = "hard" clicked = {() => handleClick(81,"hard")} current = {difficulty}/>
      </div>
    </div>
  )
}

export default Header;
'use client';
import React, { useRef, useState } from 'react'
import Link from 'next/link';
import Difficulty from './Difficulty';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Header(props: {clicked: Function}) {
  const [difficulty, setDifficulty] = useState("easy");
  const [hidden, setHidden] = useState(true);
  const difficulties = useRef<any>();

  const handleClick = (squares: number, label: string) => {
    setDifficulty(label);
    props.clicked(squares);
  };
  
  const showDifficulties = ()=> {
    setHidden(prevState => !prevState);
    const width = difficulties.current.getBoundingClientRect().width;
    if (hidden) difficulties.current.style.transform = `translateX(-${width - 50}px)`;
    else difficulties.current.style.transform = `translateX(${0}px)`;
  }

  return (
    <div className={`px-4 py-3 sm:py-4 sm:px-10 bg-gradient-to-t from-neutral-900 to-neutral-800 text-white border-b border-neutral-700 flex justify-between items-center select-none box-content overflow-hidden`}>
      <Link href="/" className="text-md uppercase sm:text-2xl">minesweeper</Link>
      <div className="flex items-center relative sm:right-[-315px] duration-300" ref={difficulties}>
        <FontAwesomeIcon icon={faBars} className="mx-8 hidden sm:block" onClick={showDifficulties}/>
        <div className="flex space-x-4">
          <Difficulty label = "easy" clicked = {() => handleClick(49, "easy")} current = {difficulty}/>
          <Difficulty label = "mid" clicked = {() => handleClick(81, "mid")} current = {difficulty}/>
          <Difficulty label = "hard" clicked = {() => handleClick(121,"hard")} current = {difficulty}/>
        </div>
      </div>
    </div>
  )
}

export default Header;
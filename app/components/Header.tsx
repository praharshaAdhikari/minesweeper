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
    <div className={`text-2xl uppercase px-10 py-4 bg-gradient-to-t from-neutral-900 to-neutral-800 text-white border-b border-neutral-700 flex justify-between items-center select-none box-content overflow-hidden`}>
      <Link href="/">minesweeper</Link>
      <div className="flex items-center relative right-[-315px] duration-300" ref={difficulties} onClick={showDifficulties}>
        <FontAwesomeIcon icon={faBars} className="mx-8"/>
        <div className="flex space-x-4">
          <Difficulty label = "easy" clicked = {() => handleClick(49, "easy")} current = {difficulty}/>
          <Difficulty label = "medium" clicked = {() => handleClick(81, "medium")} current = {difficulty}/>
          <Difficulty label = "hard" clicked = {() => handleClick(121,"hard")} current = {difficulty}/>
        </div>
      </div>
    </div>
  )
}

export default Header;
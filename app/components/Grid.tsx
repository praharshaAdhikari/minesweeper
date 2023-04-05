'use client';
import Square from "./Square";
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotateLeft } from "@fortawesome/free-solid-svg-icons";

function Grid(props: { totalSquares: number }) {
  const [status, setStatus] = useState(Array.from({ length: props.totalSquares }, () => 0));
  const [bombs, setBombs] = useState(Array.from({ length: props.totalSquares }, () => false));
  const [touchingBombs, setTouchingBombs] = useState(Array.from({ length: props.totalSquares }, () => 0));
  const [squareZero, setSquareZero] = useState(-1);
  const [gameOver, setGameOver] = useState(0);
  const [toggle, setToggle] = useState(false);
  let tempState : number[]; 

  const initializeGrid = () => {
    if (squareZero !== -1) {
      const random = status.map(() => 
        props.totalSquares === 49 ? Math.floor(Math.random() * 6) > 4 :
          props.totalSquares === 81 ? Math.floor(Math.random() * 7) > 4 :
            props.totalSquares === 121 ? Math.floor(Math.random() * 8) > 4 : false
      );
      random[squareZero] = false;
      neighbours(squareZero).forEach(item => {
        random[item] = false;
      });
      setBombs(random);
    }
  }

  useEffect(() => {
    setStatus(Array.from({ length: props.totalSquares }, () => 0));
    setBombs(Array.from({ length: props.totalSquares }, () => false));
    setSquareZero(-1);
    setGameOver(0);
    setToggle(prevState => !prevState);
  }, [props.totalSquares]);

  useEffect(() => {
    initializeGrid();
  }, [squareZero, toggle]);

  useEffect(()=> {
    setTouchingBombs(bombs.map((bomb, index) => {
      let count = 0;
      if (bomb) return -1;
      neighbours(index).forEach(item => {
        if (bombs[item]) count++;
      });
      return count;
    }));
  }, [bombs]);

  useEffect(() => {
    tempState = [...status];
    showFromIndex(squareZero);
    setStatus(tempState);  
  }, [touchingBombs]);

  useEffect(() => {
    const checkGameOver = ()=> {
      let showCount = 0;
      let totalBombs = 0;
      for (let i = 0; i < status.length; i++){
        if (bombs[i]){
          totalBombs++;
          if (status[i] === 1) return 1;
        }
        else{
          if (status[i] === 1) showCount++;
        }
      }
      if (showCount === status.length - totalBombs) return -1;
      else return 0;
    };
    if (gameOver === 0) setGameOver(checkGameOver());
  }, [status]);

  useEffect(() => {
    if (gameOver) setStatus(status.map(() => 1));
  }, [gameOver]);  
  
  const neighbours = (index: number) => {
    let line = Math.sqrt(props.totalSquares);
    let row = Math.floor(index / line);
    let column = index % line;
    let neighbours: number[] = [];
    for (let i = row - 1; i <= row + 1; i++) {
      for (let j = column - 1; j <= column + 1; j++) {
        if (i >= 0 && i < line && j >= 0 && j < line && !(i === row && j === column)) neighbours.push(i * line + j);
      }
    }
    return neighbours;
  };

  const showFromIndex = (index: number) => {
    if (! (tempState[index] === 0)) return;
    tempState[index] = 1;

    if (touchingBombs[index] === 0){
      neighbours(index).forEach(item => {
        showFromIndex(item);
      });
    };
  };

  const handleLeftClick = (index: number) => {
    if (gameOver !== 0) return;

    if(squareZero === -1){
      setSquareZero(index);
      return;
    } 

    if (!(status[index] === 0)) return; 
    tempState = [...status];
    showFromIndex(index);
    setStatus(tempState);
  };

  const handleRightClick = (index: number) => {
    if (gameOver !== 0) return;

    if ((status[index] === 1)) return;
    if ((status[index] === 0)){
      tempState = [...status];
      tempState[index] = 2;
      setStatus(tempState);
    };
    if ((status[index] === 2)){
      tempState = [...status];
      tempState[index] = 0;
      setStatus(tempState);
    };
  };

  const handleRetry = () => {
    setStatus(Array.from({ length: props.totalSquares }, () => 0));
    setBombs(Array.from({ length: props.totalSquares }, () => false));
    setSquareZero(-1);
    setGameOver(0);
    setToggle(prevState => !prevState);
  };

  const gridEl = bombs.map((bomb, index) => <Square key = {index} bomb ={bomb} status={status[index]} touch = {touchingBombs[index]} clickedLeft = {()=> handleLeftClick(index)} clickedRight = {()=> handleRightClick(index)} gameOver = {gameOver}/>);
  const gridCols = "grid-cols-" + `${Math.sqrt(props.totalSquares)}`;
  
  return (
      <div className = "flex flex-col items-center">
        <div className = {`grid ${gridCols} gap-1 relative`}>
          {gridEl}
          {(gameOver !== 0) && <div className="backdrop-blur-xs absolute w-full h-full">
            {(gameOver === 1) && <div className="bg-red-600 w-12 h-12 rounded-md flex items-center justify-center active:scale-90 duration-200 cursor-pointer font-bold select-none bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2 absolute text-white shadow-button" onClick={handleRetry}> <FontAwesomeIcon icon={faRotateLeft}/> </div>}
            {(gameOver === -1) && <div className="bg-blue-500 w-12 h-12 rounded-md flex items-center justify-center active:scale-90 duration-200 cursor-pointer font-bold select-none bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2 absolute text-white shadow-button" onClick={handleRetry}> <FontAwesomeIcon icon={faRotateLeft}/> </div>}
          </div>}
        </div>
        {/* {(gameOver === 1) && <div className="m-5 text-white"> GAME OVER! Reload to play again.</div>} */}
        {/* {(gameOver === -1) && <div className="m-5 text-white"> YOU WON! Reload to play again.</div>} */}

      </div>
  );
};

export default Grid;
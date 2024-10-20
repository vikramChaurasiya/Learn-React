import { useState } from "react"

export default function LudoBoard(){
   let [moves, setmoves] = useState({blue : 0, red : 0, yellow : 0, green : 0});
   let upDateBlue = () =>{
      setmoves({...moves,blue:moves.blue+1});
   }
    
   let upDateGreen = () =>{
      setmoves({...moves,green:moves.green+1});
   }
    
   let upDateYellow = () =>{
      setmoves({...moves,yellow:moves.yellow+1});
   }
    
   let upDateRed = () =>{
      setmoves((preMoves) =>{
         return {...preMoves,red:preMoves.red+1}
      });
   }
    
   return(
       <div>
            <p>Game Begins!</p>
            <div className="board">
               <p>Blue moves : {moves.blue}</p>
               <button style={{backgroundColor: "blue" }} onClick={upDateBlue}>+1</button>
               <p>Yellow moves : {moves.red}</p>
               <button style={{backgroundColor: "red"}}  onClick={upDateRed}>+1</button>
               <p> Green moves : {moves.yellow}</p>
               <button style={{backgroundColor: "yellow",color:"black"}}  onClick={upDateYellow}>+1</button>
               <p>Red moves : {moves.green}</p>
               <button style={{backgroundColor: "green" }} onClick={upDateGreen}>+1</button>
            </div>
       </div>
    )
}
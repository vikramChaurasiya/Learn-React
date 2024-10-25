import { useState } from "react";
import "./lottery.css";
import { genTicket , sum } from "./helper";

export default function Lottery(){
    let [Ticket, setTicket] = useState(genTicket(3));
    let isWinning = sum(Ticket) ===15;
    let buyTicket = () =>{
        setTicket(genTicket(3));
    }
    return(
        <div>
            <h1>Lottery Game!</h1>
            <div className="ticket">
                <span>{Ticket[0]}</span>
                <span>{Ticket[1]}</span>
                <span>{Ticket[2]}</span>
            </div>
            <h3>{isWinning && "Conratulation, you won!"} </h3>
            <button onClick={buyTicket}>Buy new ticket</button>
        </div>
    )
} 
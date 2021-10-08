 import React, { useState } from "react";
 import clsx from "clsx";
 import "./booking.scss"
import { Button } from "@material-ui/core";
 
 const tickets = [
   {
     name: "First floor",
     price: 10,
     occupied: [20, 21, 30, 1, 2, 8]
   },
   {
     name: "Second floor",
     price: 10,
     occupied: [9, 12, 4, 15, 20]
   },
 ];
 
 const seats = Array.from({ length: 12 * 3 }, (_, i) => i);
 
 export default function Booking() {
   const [selectedTicket, setSelectedTicket] = useState(tickets[0]);
   const [selectedSeats, setSelectedSeats] = useState([]);
   const handleSubmit = e => {
    e.preventDefault()
    window.location.href = "/checkout"
} 
 
   return (
     <div className="booking">
       <Tickets
         ticket={selectedTicket}
         onChange={(ticket) => {
           setSelectedSeats([]);
           setSelectedTicket(ticket);
         }}
       />
       <ShowCase />
       <Seat
         ticket={selectedTicket}
         selectedSeats={selectedSeats}
         onSelectedSeatsChange={(selectedSeats) =>
           setSelectedSeats(selectedSeats)
         }
       />
 
       <p className="info">
         You have selected <span className="count">{selectedSeats.length}</span>{" "}
         seats for the price of{" "}
         <span className="total">
           {selectedSeats.length * selectedTicket.price}$
         </span>
       </p>
       <Button onClick={handleSubmit}>Pay</Button>
     </div>
   );
 }
 
 function Tickets({ ticket, onChange }) {
   return (
     <div className="Tickets">
       <label htmlFor="ticket">Pick a seat</label>
       <select
         id="ticket"
         value={ticket.name}
         onChange={(e) => {
           onChange(tickets.find((ticket) => ticket.name === e.target.value));
         }}
       >
         {tickets.map((ticket) => (
           <option key={ticket.name} value={ticket.name}>
             {ticket.name}
           </option>
         ))}
       </select>
     </div>
   );
 }
 
 function ShowCase() {
   return (
     <ul className="ShowCase">
       <li>
         <span className="seat" /> <small>Available</small>
       </li>
       <li>
         <span className="seat selected" /> <small>Selected</small>
       </li>
       <li>
         <span className="seat occupied" /> <small>Occupied</small>
       </li>
     </ul>
   );
 }
 
 function Seat({ ticket, selectedSeats, onSelectedSeatsChange }) {
   function handleSelectedState(seat) {
     const isSelected = selectedSeats.includes(seat);
     if (isSelected) {
       onSelectedSeatsChange(
         selectedSeats.filter((selectedSeat) => selectedSeat !== seat)
       );
     } else {
       onSelectedSeatsChange([...selectedSeats, seat]);
     }
   }

   
 
   return (
     <div className="Coach">
       <div className="screen" />
 
       <div className="seats">
         {seats.map((seat) => {
           const isSelected = selectedSeats.includes(seat);
           const isOccupied = ticket.occupied.includes(seat);
           return (
             <span
               tabIndex="0"
               key={seat}
               className={clsx(
                 "seat",
                 isSelected && "selected",
                 isOccupied && "occupied"
               )}
               onClick={isOccupied ? null : () => handleSelectedState(seat)}
               onKeyPress={
                 isOccupied
                   ? null
                   : (e) => {
                       if (e.key === "Enter") {
                         handleSelectedState(seat);
                       }
                     }
               }
             />
           );
         })}
       </div>
       
     </div>
   );
 }
 
import { useState, useEffect } from "react";
import { ReservationContext } from "./Const";
import { saveToStorage } from "../../logic/storage";

function ReservationProvider({ children }) {
    const [reservations, setReservations] = useState([]);

    useEffect(() => {
        const storedReservations = JSON.parse(window.localStorage.getItem('reservations'));
        if(storedReservations) {
            setReservations(storedReservations);
        }
      }, []);

    const addReservation = (item) => {
        let newId = 1;
        if (reservations.length !== 0) {
            newId = reservations[0].id + 1;
        }
        let newItem = {id: newId, ...item};
        newItem = {...newItem, time : newItem.date.toLocaleTimeString()};
        newItem.date = newItem.date.toLocaleDateString();
        const updateReservations = [newItem, ...reservations];
        setReservations(updateReservations);
        saveToStorage(updateReservations);
    }

    const deleteReservation = (item) => {
        const updateReservations = reservations.filter((reservation) => reservation.id !== item.id);
        setReservations(updateReservations);
    }

    return (
        <ReservationContext.Provider value={{ reservations, addReservation, deleteReservation }} >
            {children}
        </ReservationContext.Provider>
    )
}

export default ReservationProvider;
import { useContext } from "react";
import { ReservationContext } from "./Const";

export function useReservations() {
    return useContext(ReservationContext);
}
import { MdTravelExplore } from "react-icons/md";
import ReservationCard from "../ReservationCard/ReservationCard";
import { useReservations } from "../../Hooks/ReservationsContext/useReservations";

function ReservationList() {
    const { reservations } = useReservations();

    return (
        <>
            {
                reservations.length !== 0
                    ?
                    reservations.map((item) => <ReservationCard key={item.id} reservation={item} />)
                    :
                    <div className='anyReservations-container'>
                        <span><MdTravelExplore /> You do not have active reservations.</span>
                    </div>

            }
        </>
    );
}

export default ReservationList;
import { Link, useParams, useNavigate } from "react-router-dom";
import './ReservationDetails.css';
import { MdKeyboardArrowLeft } from "react-icons/md";
import { useReservations } from "../../Hooks/ReservationsContext/useReservations";
import { useEffect, useState } from "react";
import { toast } from 'react-toastify';

function ReservationDetails() {
    const params = useParams();
    const navigate = useNavigate();
    const { reservations, deleteReservation } = useReservations();
    const [reservation, setReservation] = useState();

    useEffect(() => {
        const reservationDetails = reservations.filter((reservation) => reservation.id == params.id)[0];
        setReservation(reservationDetails);
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
        });
    }, [reservations])

    const handleDeleteButton = () => {
        deleteReservation(reservation);
        toast.error("Deleted");
        navigate('/');
    };

    return (
        <>
            <div className='detailsHeader-container'>
                <Link to={'/'}>
                    <span className='returnSpan'>
                        <MdKeyboardArrowLeft />
                    </span>
                </Link>
                <h2 className='detailsTitle'>{`Booking N${params.id}`}</h2>
                <button className='deleteButton' onClick={handleDeleteButton}>Delete</button>
            </div>
            <table>
                <thead>
                    <tr>
                        <th colSpan="2">Details</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Origin</td>
                        <td>{`${reservation?.origin}`}</td>
                    </tr>
                    <tr>
                        <td>Destination</td>
                        <td>{`${reservation?.destination}`}</td>
                    </tr>
                    <tr>
                        <td># Passengers</td>
                        <td>{`${reservation?.passengers}`}</td>
                    </tr>
                    <tr>
                        <td>Date</td>
                        <td>{`${reservation?.date} ${reservation?.time}`}</td>
                    </tr>
                </tbody>
            </table>
        </>
    );
}

export default ReservationDetails;
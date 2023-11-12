import { Link } from 'react-router-dom';
import './ReservationCard.css'
import { MdKeyboardArrowRight } from "react-icons/md";
import { useState } from 'react';

function ReservationCard({ reservation }) {

    return (
        <Link to={`/details/booking/${reservation?.id}`} style={{ textDecoration: 'none' }}>
            <article className='reservationCard'>
                <header className='reservationCard-header'>
                    <h3>{`Booking N${reservation?.id}`}</h3>
                    <p>{reservation?.date}</p>
                </header>
                <aside className='reservationCard-aside'>
                    <span className='detailsIcon'><MdKeyboardArrowRight /></span>
                </aside>
            </article>
        </Link>
    );
}

export default ReservationCard;
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { MdMyLocation, MdLocationPin, MdGroup, MdCalendarMonth } from "react-icons/md";
import { useReservations } from '../../Hooks/ReservationsContext/useReservations';
import { ToastContainer, toast } from 'react-toastify';

function ReservationForm() {
    const [formData, setFormData] = useState({
        origin: '',
        destination: '',
        passengers: '',
        date: null,
    });

    const { addReservation } = useReservations();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleDateChange = (date) => {
        setFormData({
            ...formData,
            date: date,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addReservation(formData);
        setFormData({
            origin: '',
            destination: '',
            passengers: '',
            date: null,
        })
        toast.success("Great, you already have it!");
    };

    const today = new Date();

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className='inputContainer'>
                    <MdMyLocation />
                    <input
                        type='text'
                        placeholder='Origin'
                        name='origin'
                        maxLength={20}
                        value={formData.origin}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className='inputContainer'>
                    <MdLocationPin />
                    <input
                        type='text'
                        placeholder='Destination'
                        name='destination'
                        maxLength={20}
                        value={formData.destination}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className='inputContainer'>
                    <MdGroup />
                    <input
                        type='number'
                        placeholder='Passengers'
                        name='passengers'
                        min={1}
                        max={10}
                        value={formData.passengers}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className='inputContainer'>
                    <MdCalendarMonth />
                    <DatePicker
                        placeholderText='Select date and time'
                        selected={formData.date}
                        onChange={handleDateChange}
                        showTimeSelect
                        timeFormat="HH:mm"
                        timeIntervals={60}
                        timeCaption="Hour"
                        dateFormat="dd/MM/yyyy HH:mm"
                        minDate={today}
                        required
                    />
                </div>
                <input type='submit' value={'Book'} />
            </form>
        </div>
    );
}

export default ReservationForm;
import { Route, Routes } from 'react-router-dom'
import './App.css'
import ReservationForm from './Components/ReservationForm/ReservationForm'
import ReservationList from './Components/ReservationList/ReservationList'
import ReservationDetails from './Components/ReservationDetails/ReservationDetails'
import ReservationProvider from './Hooks/ReservationsContext/ReservationProvider'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <ReservationProvider>
        <div className='wrapper'>
          <header className='header'>
            <div className='container'>
              <div className='logo'>
                <span>Nimbus</span>
                <span>Buslines</span>
              </div>
            </div>
          </header>
          <div className='container form'>
            <section className='reservationRequest'>
              <h1>
                <span className='titleForm'>
                  Book your ticket to your next destination
                </span>
              </h1>
              <p className='textForm'>
                Discover the country with over 100 destinations and one of the best fleets.
              </p>
              <ReservationForm />
            </section>
          </div>
        </div>
        <div className='container'>
          <div className='pageContainer'>
            <Routes>
              <Route path='/' element={<ReservationList />} />
              <Route path='/details/booking/:id' element={<ReservationDetails />} />
            </Routes>
          </div>
        </div>
        <div className='container'>
          <footer>
          <p>&copy; 2023 Nimbus Buslines. All rights reserved.</p>
          </footer>
        </div>
      </ReservationProvider>
      <ToastContainer
        position="bottom-center"
        theme='dark'
      />
    </>
  )
}

export default App

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RestaurantReservationForm from './pages/RestaurantReservationForm';
import ReservationForm from './pages/ReservationForm';

const App = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RestaurantReservationForm />} />
          <Route path="/reservation" element={<ReservationForm />} />
        </Routes>
      </BrowserRouter>
    );
  };

export default App;
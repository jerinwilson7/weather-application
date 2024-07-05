import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CityPage, HomePage } from "../Pages";
import 'react-toastify/ReactToastify.css'
import { 
  Bounce, 
  ToastContainer } from "react-toastify";

export const Navigation = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/city-details" element={<CityPage/>} />
        </Routes>
      </BrowserRouter>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </div>
  );
};

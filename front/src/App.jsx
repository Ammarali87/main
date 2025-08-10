import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProtectedRoute from "./components/ProtectedRoute";
import { Toaster } from "react-hot-toast";

    // <Route path="*" element={<Navigate to="/" replace />} />


export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar/> 
      <div className="flex flex-1 flex-col gap-3 items-center justify-center 
        bg-blue-500 text-white bg-[url('./public/bgImage.svg')] bg-cover">  
        
        <Toaster position="top-right" reverseOrder={false} />
           <h2 className='text-blue-400 text-2xl '> Welcome </h2>
        <Routes>
         
        </Routes>
      </div>  
      <Footer/>
    </div>
  );
}
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProtectedRoute from "./components/ProtectedRoute";
import RightTable from "./components/RightTable";
import IconTable from './components/IconTable';
import CommentSection from './components/CommentSection';

export default function App() {

  
  return (
    <div className="min-h-screen flex flex-col bg-sky-200">
      {/* Navbar */}
      <Navbar />

      {/* Main Content flex-1  to main  very Important */} 
      <main className="flex-1 flex flex-row max-md:flex-col bg-red-200 m-2 p-2 gap-4">
        {/* Video & Icon Table */}
        <div className="w-full md:w-[70vw] max-w-[1200px]">
          <h1 className="text-xl font-bold mb-4">Starting SEO as your Home</h1>
          <video
            controls
            autoPlay
            muted
            loop
            className="w-full h-auto rounded"
          >
            <source src="/vid.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* IconTable */}
          <div className="w-full mx-auto max-w-md mt-4">
            <IconTable />
          </div>
        </div>

        {/* Accordion / Duration Table */}
        <div className="w-full  md:w-[30vw] max-w-md">
          <RightTable />
        </div>
      </main>



  
        <CommentSection/>






      {/* Gear Icon */}
      <div className="fixed bottom-3 right-6 z-50 bg-sky-400 rounded-full p-1">
        {/* Gear SVG here */}
      </div>

      {/* Footer should stay at bottom */}
      <Footer />
    </div>
  );
}






                {/* dashboard  */}
                // <Route path="/" element={(<Ecommerce />)} />
                // <Route path="/ecommerce" element={(<Ecommerce />)} />

                // {/* pages  */}
                // <Route path="/orders" element={<Orders />} />
                // <Route path="/employees" element={<Employees />} />
                // <Route path="/customers" element={<Customers />} />

                // {/* apps  */}
                // <Route path="/kanban" element={<Kanban />} />
                // <Route path="/editor" element={<Editor />} />
                // <Route path="/calendar" element={<Calendar />} />
                // <Route path="/color-picker" element={<ColorPicker />} />

                // {/* charts  */}
                // <Route path="/line" element={<Line />} />
                // <Route path="/area" element={<Area />} />
                // <Route path="/bar" element={<Bar />} />
                // <Route path="/pie" element={<Pie />} />
                // <Route path="/financial" element={<Financial />} />
                // <Route path="/color-mapping" element={<ColorMapping />} />
                // <Route path="/pyramid" element={<Pyramid />} />
                // <Route path="/stacked" element={<Stacked />} />
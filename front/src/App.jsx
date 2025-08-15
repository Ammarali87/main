import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProtectedRoute from "./components/ProtectedRoute";
import RightTable from "./components/RightTable";
import IconTable from './components/IconTable';


export default function App() {

  const activeMenu = true;
  return (
    <div className="min-h-screen flex flex-col bg-sky-200 relative">
 {/* h-[100vh] max-md: h-[190vh] */}
 {/* w-[853px] h-[524px] */}
              <Navbar />

   <main className="flex flex-row max-md:flex-col h-100  bg-red-200 m-2 p-2  gap-4">
      
      {/* move video to file Vedio.jsx */}
  {/* Video container  use with video className w-full  not fixed width="" */}
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

       {/* IconTable container */}
      <div className="w-full  mx-auto max-w-md">
      <IconTable />
      </div>

      </div>

      {/* Accordion container */}
      <div className="w-full md:w-[30vw] max-w-md">
        <RightTable />
      </div>

    

   </main>

     

  

  {/* Gear Icon Fixed Bottom-Right  Can download later  */}
      <div className="fixed bottom-3  bg-sky-400 rounded-full p-1 right-6 z-50">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          fill="currentColor"
          className="bi bi-gear text-gray-700  hover:text-yellow-400 
         cursor-pointer drop-shadow-lg"
          viewBox="0 0 16 16"
        >
          <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492M5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0" />
          <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115z" />
        </svg>
      </div>
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
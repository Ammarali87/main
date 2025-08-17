import Navbar from "./Navbar";
import Footer from "./Footer";
import RightTable from "./RightTable";
import IconTable from './IconTable';
import CommentSection from './CommentSection';
import Carousel from "./Carosal";

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-sky-200">
      <Navbar />
      <main className="flex-1 flex flex-row max-md:flex-col bg-red-200 m-2 p-2 gap-4">
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
        
          <div className="w-full mx-auto max-w-md mt-4">
            <IconTable />
            <IconTable />
          </div>
        </div>
        
        <div className="w-full  md:w-[30vw] max-w-md">
          <RightTable />
        </div>
      </main>
     
      <Carousel />
      <CommentSection />
     

      <Footer />
    </div>
  );
}
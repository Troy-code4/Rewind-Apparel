import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function MainLayout({ children }) {
  return (
    <div className='min-h-screen min-w-[320px] overflow-clip bg-surface font-montserrat text-tertiary selection:bg-primary selection:text-surface'>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import { X } from "lucide-react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Collections from "./pages/Collections";
import Journal from "./pages/Journal";
import Contact from "./pages/Contact";

function App() {
  const [notification, setNotification] = useState("");

  return (
    <BrowserRouter>
      {/* TODO: Add a CartContext/useReducer provider and a useCart hook here. */}
      {/* TODO: Persist cart changes with useEffect/localStorage in a custom hook. */}
      {/* TODO: Extract this shared wrapper into a component that renders children. */}
      <div className="min-h-screen min-w-[320px] overflow-clip bg-surface font-montserrat text-tertiary selection:bg-primary selection:text-surface">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home onNotify={setNotification} />} />
          <Route path="/collections" element={<Collections onNotify={setNotification} />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/contact" element={<Contact />} />
          {/* TODO: Read the :id param with useParams and render the matching product. */}
          <Route path="/product/:id" element={<ProductDetailStub />} />
          {/* TODO: Replace this placeholder with items from the shared cart. */}
          <Route path="/cart" element={<CartStub />} />
        </Routes>
        <Footer />
        {notification && (
          <div className="fixed right-[22px] bottom-[22px] z-[90] flex max-w-[min(420px,calc(100vw-40px))] animate-toast-in items-center gap-[17px] bg-primary px-[17px] py-[15px] font-source text-[14px] text-surface shadow-[0_7px_25px_rgba(20,35,25,0.2)]" role="status">
            <span>{notification}</span>
            <button className="cursor-pointer border-0 bg-transparent px-0.5 text-[20px] text-inherit" type="button" aria-label="Dismiss notification" onClick={() => setNotification("")}>
              <X size={15} />
            </button>
          </div>
        )}
      </div>
    </BrowserRouter>
  );
}

function ProductDetailStub() {
  return (
    <main className="mx-auto min-h-[430px] w-[min(calc(100%-48px),920px)] py-[95px]">
      <p className="mb-[17px] flex items-center gap-2.5 text-[9px] font-semibold tracking-[0.16em] text-primary uppercase">Product detail · Hardcoded example</p>
      <h1 className="m-0 font-libre text-[clamp(38px,5vw,58px)] leading-[1.1] font-normal text-tertiary">The Rowan Wool Coat</h1>
      <p className="max-w-[580px] font-source text-[15px] leading-[1.6] text-[#746f65]">Wool coats · £495</p>
      <p className="max-w-[580px] font-source text-[15px] leading-[1.6] text-[#746f65]">This placeholder keeps the route working while you practise useParams and product lookup.</p>
      <a className="mt-[15px] inline-flex min-h-[47px] items-center justify-center gap-[17px] bg-primary px-5 text-[9px] font-semibold tracking-[0.08em] text-surface uppercase transition-colors hover:bg-[#174532]" href="/collections">Back to collections</a>
    </main>
  );
}

function CartStub() {
  return (
    <main className="mx-auto min-h-[430px] w-[min(calc(100%-48px),920px)] py-[95px]">
      <p className="mb-[17px] flex items-center gap-2.5 text-[9px] font-semibold tracking-[0.16em] text-primary uppercase">Your bag · Hardcoded example</p>
      <h1 className="m-0 font-libre text-[clamp(38px,5vw,58px)] leading-[1.1] font-normal text-tertiary">Your bag is taking shape.</h1>
      <p className="max-w-[580px] font-source text-[15px] leading-[1.6] text-[#746f65]">One Rowan Wool Coat · £495</p>
      <p className="max-w-[580px] font-source text-[15px] leading-[1.6] text-[#746f65]">This sample item is static. Connect it to Context, useReducer, and your useCart hook.</p>
      <a className="mt-[15px] inline-flex min-h-[47px] items-center justify-center gap-[17px] bg-primary px-5 text-[9px] font-semibold tracking-[0.08em] text-surface uppercase transition-colors hover:bg-[#174532]" href="/collections">Continue shopping</a>
    </main>
  );
}

export default App;

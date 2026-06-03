import "./App.css";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/homepage/home";
import { Services } from "./pages/servicePage/services";
import { Testimonials } from "./pages/Testimonials/testimonials";

function App() {
  return (
    <div>
      <Routes>
        <Route index element={<HomePage bookAppointment />} />
        <Route path="/services" element={<Services />} />
        <Route path="/testimonials" element={<Testimonials />} />
      </Routes>
    </div>
  );
}

export default App;

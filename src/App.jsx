import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./pages/About/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import RoutineBloodTest from "./pages/Routineblood/RoutineBloodTest";
import EconomyAndSpecialPackages from "./pages/EconomyAndSpecialPackages/EconomyAndSpecialPackages";
import InfectiousDisease from "./pages/InfectionDesease/InfectiousDisease";
import Pharmacogenomics from "./pages/Pharmacogenomics/Pharmacogenomics";
import Careers from "./pages/Careers/Careers";
import ContactUs from "./pages/ContactUs/ContactUs";

function App() {
    return (
        <>
            <BrowserRouter>
                <Header />

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route
                        path="RoutineBloodTest"
                        element={<RoutineBloodTest />}
                    />
                    <Route
                        path="EconomyAndSpecialPackages"
                        element={<EconomyAndSpecialPackages />}
                    />
                    <Route
                        path="InfectiousDisease"
                        element={<InfectiousDisease />}
                    />
                    <Route
                        path="Pharmacogenomics"
                        element={<Pharmacogenomics />}
                    />
                    <Route path="Careers" element={<Careers />} />
                    <Route path="ContactUs" element={<ContactUs />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    );
}

export default App;

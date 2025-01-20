import { NavLink } from "react-router-dom";
import { useState } from "react";

function Nav() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="bg-slate-600">
            {/* Mobile Menu Toggle Button */}
            <div className="flex justify-between items-center h-[50px] px-4 md:px-8">
                {/* <h1 className="text-white font-bold text-lg">LOGO</h1> */}
                <button
                    className="text-white text-2xl md:hidden"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    ☰
                </button>
            </div>

            {/* Menu Items */}
            <ul
                className={`${
                    menuOpen ? "block" : "hidden"
                } md:flex md:gap-10 md:justify-center md:items-center md:h-[50px] bg-slate-600`}
            >
                <li className="cursor-pointer p-2 md:p-0">
                    <NavLink
                        to="/"
                        activeClassName="active"
                        className="text-white hover:text-gray-300"
                        onClick={() => setMenuOpen(false)}
                    >
                        HOME
                    </NavLink>
                </li>
                <li className="cursor-pointer p-2 md:p-0">
                    <NavLink
                        to="/about"
                        activeClassName="active"
                        className="text-white hover:text-gray-300"
                        onClick={() => setMenuOpen(false)}
                    >
                        ABOUT
                    </NavLink>
                </li>
                <li className="cursor-pointer p-2 md:p-0">
                    <NavLink
                        to="/RoutineBloodTest"
                        activeClassName="active"
                        className="text-white hover:text-gray-300"
                        onClick={() => setMenuOpen(false)}
                    >
                        ROUTINE BLOOD TEST
                    </NavLink>
                </li>
                <li className="cursor-pointer p-2 md:p-0">
                    <NavLink
                        to="/EconomyAndSpecialPackages"
                        activeClassName="active"
                        className="text-white hover:text-gray-300"
                        onClick={() => setMenuOpen(false)}
                    >
                        ECONOMY & SPECIAL PACKAGES
                    </NavLink>
                </li>
                <li className="cursor-pointer p-2 md:p-0">
                    <NavLink
                        to="/InfectiousDisease"
                        activeClassName="active"
                        className="text-white hover:text-gray-300"
                        onClick={() => setMenuOpen(false)}
                    >
                        INFECTIOUS DISEASE
                    </NavLink>
                </li>
                <li className="cursor-pointer p-2 md:p-0">
                    <NavLink
                        to="/Pharmacogenomics"
                        activeClassName="active"
                        className="text-white hover:text-gray-300"
                        onClick={() => setMenuOpen(false)}
                    >
                        PHARMACOGENOMICS
                    </NavLink>
                </li>
                <li className="cursor-pointer p-2 md:p-0">
                    <NavLink
                        to="/Careers"
                        activeClassName="active"
                        className="text-white hover:text-gray-300"
                        onClick={() => setMenuOpen(false)}
                    >
                        CAREERS
                    </NavLink>
                </li>
                <li className="cursor-pointer p-2 md:p-0">
                    <NavLink
                        to="/ContactUs"
                        activeClassName="active"
                        className="text-white hover:text-gray-300"
                        onClick={() => setMenuOpen(false)}
                    >
                        CONTACT US
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;

// import { NavLink } from "react-router-dom";

// function Nav() {
//     return (
//         <nav className="bg-slate-600">
//             <ul className="w-full h-[50px] flex gap-10 text-white justify-center items-center">
//                 <li className="cursor-pointer">
//                     <NavLink to="/" activeClassName="active">
//                         HOME
//                     </NavLink>
//                 </li>
//                 <li className="cursor-pointer">
//                     <NavLink to="/about" activeClassName="active">
//                         ABOUT
//                     </NavLink>
//                 </li>
//                 <li className="cursor-pointer">
//                     <NavLink to="/RoutineBloodTest" activeClassName="active">
//                         ROUTINE BLOOD TEST
//                     </NavLink>
//                 </li>
//                 <li className="cursor-pointer">
//                     <NavLink
//                         to="/EconomyAndSpecialPackages"
//                         activeClassName="active"
//                     >
//                         ECONOMY & SPECIAL PACKAGES
//                     </NavLink>
//                 </li>
//                 <li className="cursor-pointer">
//                     <NavLink to="/InfectiousDisease" activeClassName="active">
//                         INFECTIOUS DISEASE
//                     </NavLink>
//                 </li>
//                 <li className="cursor-pointer">
//                     <NavLink to="/Pharmacogenomics" activeClassName="active">
//                         PHARMACOGENOMICS
//                     </NavLink>
//                 </li>
//                 <li className="cursor-pointer">
//                     <NavLink to="/Careers" activeClassName="active">
//                         CAREERS
//                     </NavLink>
//                 </li>
//                 <li className="cursor-pointer">
//                     <NavLink to="/ContactUs" activeClassName="active">
//                         CONTACT US
//                     </NavLink>
//                 </li>
//             </ul>
//         </nav>
//     );
// }

// export default Nav;

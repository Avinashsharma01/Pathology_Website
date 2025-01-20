import igenomedxLOGO from "../assets/images/igenomedxLOGO.jpg";

function CustomerCare() {
    return (
        <div className="w-full bg-cyan-500 py-4 px-6 md:px-16">
            {/* Container for Logo, Contact Information, and Buttons */}
            <div className="flex justify-between items-center text-center md:text-left">
                {/* Logo */}
                <div className="logo">
                    <img
                        src={igenomedxLOGO}
                        alt="igenomedxLOGO"
                        className="w-48 md:w-60 cursor-pointer"
                    />
                </div>

                {/* Contact Information */}
                <div className="contact">
                    <h1 className="text-xl md:text-2xl font-medium text-white">
                        Customer Care : 0120-4139500
                    </h1>
                </div>

                {/* Buttons */}
                <div className="btns flex gap-4">
                    <button className="bg-white text-black py-2 px-6 rounded-full">
                        Book Now
                    </button>
                    <button className="bg-white text-black py-2 px-6 rounded-full">
                        Visit Home
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CustomerCare;

// // import {
// //     FaFacebook,
// //     FaInstagram,
// //     FaLinkedin,
// //     FaTwitter,
// //     FaWhatsapp,
// // } from "react-icons/fa";
// import igenomedxLOGO from "../assets/images/igenomedxLOGO.jpg";
// function CustomerCare() {
//     return (
//         <div className="w-full h-[90px] bg-cyan-500 flex justify-around items-center">
//             <div className="logo">
//                 <img
//                     src={igenomedxLOGO}
//                     alt="igenomedxLOGO"
//                     className="w-60 cursor-pointer"
//                 />
//             </div>
//             <div className="contact">
//                 <h1 className="text-2xl font-medium text-white">
//                     Customer Care : 0120-4139500
//                 </h1>
//                 {/* <div className="flex space-x-4 text-2xl">
//                     <a
//                         href="https://whatsapp.com"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="hover:text-yellow-400"
//                     >
//                         <FaWhatsapp />
//                     </a>
//                     <a
//                         href="https://instagram.com"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="hover:text-yellow-400"
//                     >
//                         <FaInstagram />
//                     </a>
//                     <a
//                         href="https://facebook.com"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="hover:text-yellow-400"
//                     >
//                         <FaFacebook />
//                     </a>
//                     <a
//                         href="https://twitter.com"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="hover:text-yellow-400"
//                     >
//                         <FaTwitter />
//                     </a>
//                     <a
//                         href="https://linkedin.com"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="hover:text-yellow-400"
//                     >
//                         <FaLinkedin />
//                     </a>
//                 </div> */}
//             </div>
//             <div className="btns  flex gap-4">
//                 <button className="bg-white text-black py-2 px-4 rounded-full">
//                     Book Now
//                 </button>
//                 <button className="bg-white text-black py-2 px-4 rounded-full">
//                     Visit Home
//                 </button>
//             </div>
//         </div>
//     );
// }

// export default CustomerCare;

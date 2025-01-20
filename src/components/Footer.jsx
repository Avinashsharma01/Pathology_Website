import {
    FaWhatsapp,
    FaInstagram,
    FaFacebook,
    FaTwitter,
    FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-purple-500 text-white py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Content */}
                <div className="flex flex-wrap justify-between gap-10">
                    {/* Contact Info */}
                    <div className="w-full md:w-1/3">
                        <h4 className="text-lg font-semibold mb-4">
                            Contact Us
                        </h4>
                        <p>
                            Email:{" "}
                            <a
                                href="mailto:Support@iGenomeDxIndia.com"
                                className="hover:underline"
                            >
                                Support@iGenomeDxIndia.com
                            </a>
                        </p>
                        <p>
                            Address: D-5, 1st Floor, Sector 63, Noida, Gautam
                            Budh Nagar, Uttar Pradesh 201301, India
                        </p>
                        <p>
                            Phone:{" "}
                            <a
                                href="tel:01204139500"
                                className="hover:underline"
                            >
                                0120-4139500
                            </a>
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="w-full md:w-1/3">
                        <h4 className="text-lg font-semibold mb-4">
                            Quick Links
                        </h4>
                        <ul className="space-y-2">
                            <li>
                                <a href="#home" className="hover:underline">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="#about" className="hover:underline">
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="#services" className="hover:underline">
                                    Routine Blood Test
                                </a>
                            </li>
                            <li>
                                <a href="#packages" className="hover:underline">
                                    Economy & Special Packages
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#infectious"
                                    className="hover:underline"
                                >
                                    Infectious Disease
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#pharmacogenomics"
                                    className="hover:underline"
                                >
                                    Pharmacogenomics
                                </a>
                            </li>
                            <li>
                                <a href="#careers" className="hover:underline">
                                    Careers
                                </a>
                            </li>
                            <li>
                                <a href="#contact" className="hover:underline">
                                    Contact Us
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Social Media */}
                    <div className="w-full md:w-1/3">
                        <h4 className="text-lg font-semibold mb-4">
                            Follow Us
                        </h4>
                        <div className="flex space-x-4 text-2xl">
                            <a
                                href="https://whatsapp.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-yellow-400"
                            >
                                <FaWhatsapp />
                            </a>
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-yellow-400"
                            >
                                <FaInstagram />
                            </a>
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-yellow-400"
                            >
                                <FaFacebook />
                            </a>
                            <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-yellow-400"
                            >
                                <FaTwitter />
                            </a>
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-yellow-400"
                            >
                                <FaLinkedin />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="mt-10 text-center text-sm border-t border-purple-500 pt-4">
                    &copy; 2024 by iGenomeDx India Ltd. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;

import Healthcareprofessionals from "../assets/TargetAudience/Healthcareprofessionals.avif";
import Patients from "../assets/TargetAudience/Patients.avif";
import Institutions from "../assets/TargetAudience/Institutions.avif";
import Individuals from "../assets/TargetAudience/Individuals.avif";

function TargetAudience() {
    return (
        <section className="w-full py-12 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center text-green-600 mb-8 uppercase">
                    Target Audience
                </h2>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {[
                        {
                            title: "Healthcare professionals",
                            subtitle: "(physicians, specialists, hospitals)",
                            image: Healthcareprofessionals, // Replace with your image URL
                        },
                        {
                            title: "Patients",
                            subtitle:
                                "seeking personalized and reliable diagnostic services",
                            image: Patients, // Replace with your image URL
                        },
                        {
                            title: "Institutions",
                            subtitle:
                                "requiring pharmacogenomic testing for personalized drug therapies",
                            image: Institutions, // Replace with your image URL
                        },
                        {
                            title: "Individuals",
                            subtitle:
                                "looking for cost-effective health check-ups and diagnostic panels",
                            image: Individuals, // Replace with your image URL
                        },
                    ].map((item, index) => (
                        <div
                            key={index}
                            className="relative bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out"
                        >
                            {/* Background Image */}
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-48 object-cover opacity-80"
                            />
                            {/* Overlay Content */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                            {/* Text Content */}
                            <div className="absolute bottom-4 px-4 text-center">
                                <h3 className="text-lg font-bold text-white">
                                    {item.title}
                                </h3>
                                <p className="text-sm text-gray-200">
                                    {item.subtitle}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default TargetAudience;

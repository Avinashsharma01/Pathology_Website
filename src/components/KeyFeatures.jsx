import BackgroundIMG from "../assets/images/KeyFeatureBG.avif";

import BloodTest from "../assets/KeyFeatureIMG/BloodTest.avif";
import infectious from "../assets/KeyFeatureIMG/infectious.avif";
import Pharmacogenomics from "../assets/KeyFeatureIMG/Pharmacogenomics.avif";
import DRUGMONITORING from "../assets/KeyFeatureIMG/DRUGMONITORING.avif";
import HOMECOLLECTION from "../assets/KeyFeatureIMG/HOMECOLLECTION.avif";
import BloodSample from "../assets/KeyFeatureIMG/BloodSample.avif";

function KeyFeatures() {
    const features = [
        {
            title: "ROUTINE PATHOLOGY",
            description:
                "iGenome DX India offers a full spectrum of diagnostic pathological tests for routine health monitoring and disease diagnosis.",
            image: BloodTest, // Replace with your image path
        },
        {
            title: "​INFECTIOUS DISEASE",
            description:
                "Leveraging advanced molecular techniques, the company provides fast and accurate testing for a wide range of infectious diseases.",
            image: infectious, // Replace with your image path
        },
        {
            title: "PHARMACOGENOMICS",
            description:
                "A unique service at iGenome DX India, pharmacogenomic testing identifies how a patient's genetics impact drug response, ensuring optimal, personalized treatment.",
            image: Pharmacogenomics, // Replace with your image path
        },
        {
            title: "DRUG MONITORING",
            description:
                "iGenome Dx India’s drug monitoring services help clinicians keep medication levels within safe, effective ranges tailored to each patient’s needs.",
            image: DRUGMONITORING, // Replace with your image path
        },
        {
            title: "HOME COLLECTION",
            description:
                "For added convenience, iGenome DX India offers sample collection at home, enabling patients to avoid lab visits.",
            image: HOMECOLLECTION, // Replace with your image path
        },
        {
            title: "ECONOMY PACKAGES & SPECIALS",
            description:
                "We offer affordable health packages, including options for general wellness, diabetes, heart health, cancer screening, and more.",
            image: BloodSample, // Replace with your image path
        },
    ];
    return (
        <section
            className="w-full h-screen "
            style={{
                backgroundImage: `url(${BackgroundIMG})`,
                opacity: "10px",
            }}
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out mt-6"
                        >
                            <div
                                className="h-40 bg-cover bg-center"
                                style={{
                                    backgroundImage: `url(${feature.image})`,
                                }}
                            ></div>
                            <div className="p-6">
                                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600 text-sm mb-4">
                                    {feature.description}
                                </p>
                                <a
                                    href="#"
                                    className="text-purple-700 font-semibold hover:underline text-sm"
                                >
                                    Learn More
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default KeyFeatures;

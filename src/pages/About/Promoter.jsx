import Dr_PramodMishra from "../../assets/PromotersImages/Dr_ PramodMishra.avif";
import Dr_SanjeevKumar from "../../assets/PromotersImages/Dr_SanjeevKumar.avif";
import Dr_NitiVanee from "../../assets/PromotersImages/Dr_ NitiVanee.avif";
import Mr_SanjayKumarMishra from "../../assets/PromotersImages/Mr_SanjayKumarMishra.avif";

const Promoter = () => {
    const promoters = [
        {
            name: "Dr. Pramod Kumar Mishra, PhD",
            title: "Chairman",
            description:
                "Dr. Pramod Mishra is a visionary research scientist and entrepreneur from the USA. With a Ph.D. in Microbiology & Immunology from the University of Texas, USA, Dr. Mishra co-founded iGenomeDx in 2016, leading it to become a trailblazer in molecular diagnostics across the USA. His progressive approach combines rigorous compliance with groundbreaking innovation, earning iGenomeDx the 'Minority-Owned Business of the Year' award. Dr. Mishra's dedication to translating science into real-world health solutions reflects his commitment to improving patient care and advancing global healthcare.",
            image: Dr_PramodMishra, // Replace with actual image
        },
        {
            name: "Dr. Sanjeev Kumar",
            title: "General Manager (MIT-Boston), Director of Corporate Strategies & Legal Affairs",
            description:
                "Dr. Sanjeev Kumar is a versatile leader with extensive experience in corporate strategy, finance, and legal compliance, well-suited to drive success in the healthcare industry. With over 35 years in corporate governance, economic law, and finance, Dr. Kumar brings strategic insight and a robust understanding of complex regulations crucial to healthcare management. He holds advanced degrees, including a PhD, and has studied General Management at MIT's Sloan School. As Founder and Chairman of BPA Foundation and Managing Director of BPA Advisory Limited, Dr. Kumar's leadership combines financial acumen with a commitment to advancing healthcare innovation and governance.",
            image: Dr_SanjeevKumar, // Replace with actual image
        },
        {
            name: "Dr. Niti Vanee, PhD",
            title: "Director",
            description:
                "Dr. Niti Vanee, Director of iGenomeDx India, and CEO of iGenomeDx USA. With over a decade in genomics and healthcare entrepreneurship, she spearheads initiatives in pharmacogenomics and infectious disease testing. Her leadership has earned accolades such as the Minority-Owned Business of the Year award from government agencies and Alumni of the Year award from her University. Known for her mentorship and collaborative approach, Dr. Vanee takes keen interest to shape the future biotech professionals. A Ph.D. in Integrative Life Sciences, she drives innovation and patient-centered healthcare.",
            image: Dr_NitiVanee, // Replace with actual image
        },
        {
            name: "Mr. Sanjay Kumar Mishra",
            title: "Senior Vice President",
            description:
                "Mr. Sanjay Kumar Mishra brings extensive experience in accounting, multinational banking, and investment banking. With 20 years in the Accounts Branch of the Indian Air Force, he honed skills in store accounting, fund management, and audit coordination. His background includes handling audits, managing non-public funds, and overseeing comprehensive accounting tasks. His recent role as a Senior Analyst in fund accounting further refined his expertise in asset management. Sanjay’s diverse experience and strategic insights make him a vital asset to iGenomeDx, driving financial and operational excellence.",
            image: Mr_SanjayKumarMishra, // Replace with actual image
        },
    ];

    return (
        <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-32">
            <div className="about  bg-white rounded-lg shadow-lg p-6">
                <h1 className=" text-purple-600 text-2xl font-bold">
                    ABOUT US
                </h1>
                <p>
                    IGenome DX India is an integrated diagnostic lab which
                    offers advanced diagnostic solutions at the forefront of
                    disease detection, providing reliable, accurate, and fast
                    results through cutting-edge technology. Specializing in
                    areas such as pharmacogenomic testing, the company ensures
                    personalized healthcare by determining the efficacy and
                    suitability of drug treatments for individual patients.
                </p>
            </div>
            {/* Promoters Section */}
            <h2 className="text-3xl font-bold text-center text-purple-600 mb-8 mt-8">
                PROMOTERS
            </h2>
            <p className="text-center text-gray-600 mb-12">
                Dedication. Expertise. Passion.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                {promoters.map((promoter, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center"
                    >
                        <img
                            src={promoter.image}
                            alt={promoter.name}
                            className="w-32 h-32 rounded-full mb-4"
                        />
                        <h3 className="text-xl font-semibold text-gray-800">
                            {promoter.name}
                        </h3>
                        <h4 className="text-sm text-purple-600 font-medium mb-4">
                            {promoter.title}
                        </h4>
                        <p className="text-gray-600 text-sm">
                            {promoter.description}
                        </p>
                    </div>
                ))}
            </div>

            {/* Additional Details Section */}
            <div className="mt-16 bg-white shadow-lg rounded-lg p-8">
                <h3 className="text-2xl font-bold text-purple-600 mb-4">
                    Technology & Innovation
                </h3>
                <p className="text-gray-600 mb-8">
                    IGenome DX India employs Next-Generation Sequencing (NGS),
                    AI-driven diagnostics, and advanced molecular biology
                    techniques to deliver precise and fast diagnostic results.
                    These technologies help ensure accurate testing and
                    personalized healthcare solutions, including pharmacogenomic
                    insights.
                </p>

                <h3 className="text-2xl font-bold text-purple-600 mb-4">
                    Vision
                </h3>
                <p className="text-gray-600 mb-8">
                    To transform healthcare in India through technologically
                    advanced and personalized diagnostics, becoming a trusted
                    name in the industry for accurate, reliable, and fast
                    services.
                </p>

                <h3 className="text-2xl font-bold text-purple-600 mb-4">
                    Mission
                </h3>
                <p className="text-gray-600 mb-8">
                    To be a leader in diagnostics by offering innovative,
                    reliable, and personalized testing solutions, empowering
                    healthcare professionals with fast and accurate results for
                    better patient care.
                </p>

                <h3 className="text-2xl font-bold text-purple-600 mb-4">
                    Core Values
                </h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>
                        <span className="font-bold">Innovation:</span>{" "}
                        Continuously adopting the latest advancements in
                        diagnostics.
                    </li>
                    <li>
                        <span className="font-bold">Accuracy:</span> Ensuring
                        precise results with every test.
                    </li>
                    <li>
                        <span className="font-bold">Personalization:</span>{" "}
                        Providing tailored healthcare insights through services
                        like pharmacogenomic testing.
                    </li>
                    <li>
                        <span className="font-bold">Reliability:</span>{" "}
                        Delivering consistent, trustworthy results.
                    </li>
                    <li>
                        <span className="font-bold">Accessibility:</span>{" "}
                        Offering services such as home collection and affordable
                        diagnostic packages.
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Promoter;

import Heading from "../../components/Heading";
import KeyFeatures from "../../components/KeyFeatures";
import Slider from "../../components/Slider";

import image1 from "../../assets/images/image1.avif";
import image2 from "../../assets/images/image2.avif";
import image3 from "../../assets/images/image3.avif";
import TargetAudience from "../../components/TargetAudience";

function Home() {
    const images = [
        {
            url: image1,
            text: "ACCURATE, FAST & CONSISTENT RESULTS",
        },
        {
            url: image2,
            text: "AT THE FOREFRONT OF DIAGNOSIS OF DISEASES​ Providing valuable services and REPORTS that empower precise Treatment",
        },
        {
            url: image3,
            text: "A Laboratory of Qualified, Expert Scientists & Professionals with 20+ Years of Experience",
        },
    ];
    return (
        <div>
            <Slider images={images} />
            <Heading
                heading={"EXPLORE OUR SERVICES"}
                title={
                    "Exceptional efficiency in delivering results promptly from team of expert"
                }
            />
            <KeyFeatures />
            <TargetAudience />
        </div>
    );
}

export default Home;

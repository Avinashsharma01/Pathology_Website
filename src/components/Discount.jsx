function Discount() {
    return (
        <div className="flex flex-col md:flex-row justify-around items-center w-full h-auto md:h-20 px-6 md:px-12 lg:px-48 text-center text-base md:text-lg bg-white">
            {/* Pathology Section */}
            <h1 className="text-green-500 mb-4 md:mb-0">
                Complete Range of <br className="hidden md:block" />
                Pathology & Blood Tests
            </h1>

            {/* Discounts Section */}
            <h1 className="mb-4 md:mb-0">
                Avail UPTO <span className="font-bold">50% Discounts</span> On{" "}
                <br className="hidden md:block" />
                Selected Tests{" "}
                <span className="text-red-500">(For Limited Period)</span>
            </h1>

            {/* Economy Packages Section */}
            <h1 className="text-[#8256D0]">
                ECONOMY &<br className="md:hidden" />
                <span className="hidden md:inline"> </span>
                SPECIAL PACKAGES
            </h1>
        </div>
    );
}

export default Discount;

// function Discount() {
//     return (
//         <div className="flex justify-around items-center w-full h-20 px-48 text-center text-1xl bg-white">
//             <h1 className=" text-green-500">
//                 Complete Range of <br /> Pathology & Blood Tests
//             </h1>
//             <h1 className="">
//                 Avail UPTO 50% Discounts On <br /> Selected Test (For Limited
//                 Period)
//             </h1>
//             <h1 className=" text-[#8256D0]">
//                 ECONOMY &
//                 <br />
//                 SPECIAL PACKAGES
//             </h1>
//         </div>
//     );
// }

// export default Discount;

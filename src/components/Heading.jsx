/* eslint-disable react/prop-types */
function Heading({ heading, title }) {
    return (
        <div className="w-full p-10 text-center">
            <h1 className="text-1xl p-4">{title}</h1>
            <h1 className="text-4xl text-[#2EB886] font-bold">{heading}</h1>
        </div>
    );
}

export default Heading;

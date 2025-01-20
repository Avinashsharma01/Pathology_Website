import CustomerCare from "./CustomerCare";
import Discount from "./Discount";
import Nav from "./Nav";

function Header() {
    return (
        <div className="sticky top-0 right-0 z-10">
            <CustomerCare />
            <Discount />
            <Nav />
        </div>
    );
}

export default Header;

import { Link } from "react-router-dom";


const Header = ()=>{
    return (
        <div className="header flex justify-between shadow-lg">
            <div className="logo-container">
            <img
                className="logo w-[140px]"
                src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"
            />
            </div>
            <div className="nav-items">
                <ul className="flex py-6 mt-[5px]">
                   <Link to="/"> 
                        <li className="nav-list px-5 cursor-pointer">Home</li>
                    </Link>
                    <Link to="/about">
                        <li className="nav-list px-5 cursor-pointer" >About Us</li>
                    </Link>
                   <Link to="/contact">
                         <li className="nav-list px-5 cursor-pointer">Contact Us</li>
                   </Link>
                   <Link to="/cart">
                         <li className="nav-list px-5 cursor-pointer">Cart</li>
                   </Link>
                </ul>
            </div>
            <div>
                <ul className="flex">
                    <li className="px-[20px] py-[12px] mt-[10px]"><button className="bg-[#1434A4] rounded-[35px] text-white w-[85px] h-[40px] ">CART</button></li>
                    <li className="px-[20px] py-[12px] mt-[10px]"><button className="rounded-[35px] bg-black text-white w-[85px] h-[40px]">Login</button></li>
                </ul>
            </div>
        </div>
    )
};

export default Header;
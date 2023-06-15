
import { useState } from "react";

const RestaurantCard = (props) => {
    

    const {resData} = props;
    const {
      cloudinaryImageId,
        name,
        cuisines,
        avgRating,
        costForTwo,
        deliveryTime
    } = resData?.data

    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
      setIsHovered(true);
    };
  
    const handleMouseLeave = () => {
      setIsHovered(false);
    };
    return (
      <div className="res-card h-[350px] mx-[5px] mt-[20px] shadow-lg border hover:border-gray-600">
        <div className="p-[22px]">
          <div className="overflow-hidden">
              <img
                className="res-logo w-[260px]  transform transition-transform duration-300 ease-in-out hover:scale-110"
                alt="res-logo"
                src={
                  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
                  cloudinaryImageId
                }
              />

          </div>
            <h3 className="mt-[12px]">{name.slice(0,24)}</h3>
            <h4 className="text-[12px]">{cuisines.slice(0, 3).join(", ")}</h4>
            <div className="additional-container flex mt-[7px]">
              <div className="rating-container w-[50px] bg-green-600 h-[23px] ">
                <h4 className="text-white text-[13px] ml-[6px] mt-[2px]">★ {avgRating}</h4>
              </div>
              <div className="delivery-time">
                  <h4 className="text-[13px] ml-[50px] mt-[2px]">{deliveryTime} min</h4>
              </div> 
              <div className="cost-for-two">
                  <h4 className="text-[13px] ml-[40px] mt-[2px]">₹{costForTwo / 100} For Two</h4>
              </div> 
            </div>
            <div className="ml-[90px] mt-[30px] text-blue-400 ">
              <button onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}>Quick view</button>
            </div>
                  {isHovered && (
              <div className="z-[20] position-fixed h-[351px] mt-[-326px] ml-[298px]">
                This component is visible on button hover.
              </div>
      )}
        </div>
      </div>
    );
  };


  export default RestaurantCard;
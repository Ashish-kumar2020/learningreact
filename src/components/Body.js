import RestaurantCard from "./RestaurantCard";
import { resList } from "../utils/dummyData";
import { useState } from "react";
const Body = () => {



  return (
      <>
        <div className="search-container flex justify-center mt-[40px]">
            <input className="border border-black w-[400px] p-[3px] text-[17px] pl-[16px] h-[40px]" type="text" placeholder="Search For Restaurant..." />
            <button className="ml-[40px] border  w-[100px] h-[40px] bg-blue-50" > 🔎 Search</button>
        </div>
        <div className="body my-[40px] mx-[40px]">
          <div className="res-container flex flex-wrap">
            {resList.map((restaurant)=>(
                  <RestaurantCard key={restaurant.data.id} resData = {restaurant}/>
            ))}
          </div>
        </div>
      </>
    );
  };

  export default Body;


import RestaurantCard from "./RestaurantCard";
import { resList } from "../utils/dummyData";
import { useState , useEffect } from "react";
const Body = () => {

  const [restaurant,setRestaurant] = useState([]);
  const [filterRestaurantData,setFilterRestaurantData] = useState([])
  const [searchText, setSearchText] = useState("");


  useEffect(()=>{
    fetchRestaurantData();
  },[]);

  const fetchRestaurantData =  async ()=>{
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6105073&lng=77.1145653&sortBy=RELEVANCE&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    // Optional Chaining
    setRestaurant(json?.data?.cards[2]?.data?.data?.cards);
    setFilterRestaurantData(json?.data?.cards[2]?.data?.data?.cards);
  }

  return (
      <>
        <div className="search-container flex justify-center mt-[40px]">
            <input className="border border-black w-[400px] p-[3px] text-[17px] pl-[16px] h-[40px]" type="text" placeholder="Search For Restaurant..." value={searchText} onChange={(e)=>{
              setSearchText(e.target.value)
            }}/>
            <button className="ml-[40px] border  w-[100px] h-[40px] bg-blue-50" onClick={() => {
              // Filter the restraunt cards and update the UI
              // searchText
              console.log(searchText);

              const filteredRestaurant = restaurant.filter((res) =>
                  res.data.name.toLowerCase().includes(searchText.toLowerCase())
              );


              setFilterRestaurantData(filteredRestaurant);
              console.log(filteredRestaurant)
            }}> 🔎 Search</button>
        </div>
        <div className="body my-[40px] mx-[40px]">
          <div className="res-container flex flex-wrap">
            {filterRestaurantData.map((res)=>(
                  <RestaurantCard key={res.data.id} resData = {res}/>
            ))}
          </div>
        </div>
      </>
    );
  };

  export default Body;


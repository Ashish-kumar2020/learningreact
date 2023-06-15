
import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";
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

  // filter functions
  const Relevance = ()=>{
    setFilterRestaurantData(restaurant)
  }

  const deliveryTime = ()=>{
    const filteredList = restaurant.filter(
      (res) => res.data.deliveryTime < 30
    );
    setFilterRestaurantData(filteredList)
  }

  const rating = ()=>{
    const filterRating = restaurant.filter((res)=>
      res.data.avgRating > 4
    );
    setFilterRestaurantData(filterRating)
  }

  const lowToHigh = ()=>{
    const sortedProducts = [...restaurant].sort((a, b) => a.data.costForTwo - b.data.costForTwo);
    setFilterRestaurantData(sortedProducts)
  }

  const highToLow = ()=>{
    const sortedProductsHighToLow = [...restaurant].sort((a, b) =>b.data.costForTwo - a.data.costForTwo);
    setFilterRestaurantData(sortedProductsHighToLow)
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
        <div className="h-[50px] mt-[30px] ml-[320px] w-[950px]">
            <button className="border mx-[12px] mt-[5px] p-[5px] bg-slate-500" onClick={Relevance}>Relevance</button>
            <button className="border mx-[12px] mt-[5px] p-[5px] bg-slate-500" onClick={deliveryTime}>Delivery Time</button>
            <button className="border mx-[12px] mt-[5px] p-[5px] bg-slate-500" onClick={rating}>Rating</button>
            <button className="border mx-[12px] mt-[5px] p-[5px] bg-slate-500" onClick={lowToHigh}>Cost: Low to High</button>
            <button className="border mx-[12px] mt-[5px] p-[5px] bg-slate-500" onClick={highToLow}>Cost: High to Low</button>
        
       </div>
        <div className="body my-[40px] mx-[40px]">
          <div className="res-container flex flex-wrap">
            {filterRestaurantData.map((res)=>(
               <Link
               key={res.data.id}
               to={"/restaurants/" + res.data.id}
             >
                  <RestaurantCard resData={res} />
             </Link>
            ))}
          </div>
        </div>
      </>
    );
  };

  export default Body;


import RestaurantCard from "./RestaurantCard";
import { resList } from "../utils/dummyData";
const Body = () => {
    return (
      <div className="body">
        <div className="search">Search</div>
        <div className="res-container flex flex-wrap">
          {resList.map((restaurant)=>(
                <RestaurantCard key={restaurant.data.id} resData = {restaurant}/>
          ))}
        </div>
      </div>
    );
  };

  export default Body;
import { restaurantList } from "../config";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

function filterData(searchInput, restaurants) {
  return restaurants.filter((restaurant) =>
    restaurant?.data?.name?.toLowerCase()?.includes(searchInput.toLowerCase())
  );
}

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [fillteredRestaurants, setFillteredRestaurants] = useState([]);
  const [searchInput, setSearchInput] = useState("");


  async function getRestaurants() {
    const data = await fetch(
      'https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.449923&lng=80.3318736&page_type=DESKTOP_WEB_LISTING'
    );
    const json = await data.json();

    // Optional Chaining
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFillteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }
  useEffect(() => {
    // API Call
    getRestaurants();
  }, []);

  return fillteredRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
    {/* ABC */}
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            // need to filete the data
            const data = filterData(searchInput, allRestaurants);

            // update the state - restaurants
            setFillteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {fillteredRestaurants.map((restaurant) => {
          return (
            <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
          );
        })}
      </div>
    </>
  );
};

export default Body;
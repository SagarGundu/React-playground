import Restaurantcard from "./Restaurantcard";
import resList from "./Utils/mockData";
import {useEffect, useState} from "react";


const Body =() =>{
    const [ ListOfRestaurants, setListOfRestaurant] = useState(resList);
    const [filteredRestaurant, setFilteredRestaurant] = useState(resList);
    const[ searchText, setSearchText] = useState("");

    useEffect(() =>{
      fetchData();
    },[]);

    const fetchData = async() => {
      const data = await fetch("https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=19.0167997&lng=72.8592048&carousel=true&third_party_vendor=1"

      );
      const json = await data.json();
      console.log(json);
      const restaurants= json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

      
      setListOfRestaurant(restaurants || []);
      setFilteredRestaurant(restaurants || []);
    };

    
    return(
      <div className ="body">
        <div className="filter">

          <div className ="search">
            <input type="text" className="search-box"
            value ={searchText}
            onChange={(e) =>{
             setSearchText(e.target.value);
             

            } }
            />
            <button
              onClick={() =>{
               
                const filteredList=filteredRestaurant.filter((res) =>
                   res.info.name.toLowerCase().includes(searchText.toLowerCase()));

                setListOfRestaurant(filteredList);
              }}
              > 
              Search</button>
          </div>
            <button
            className ="filter-btn"
            onClick={() =>{ 
                const filteredList = filteredRestaurant.filter(
                    (res) =>res.info.avgRating >  4
                );
                setListOfRestaurant(filteredList);
            }}
            >
                Top Rated Restaurants
        </button>
        
        </div>

        <div className="res-container">
        {ListOfRestaurants.map((restaurant) =>(
          <Restaurantcard key={restaurant.info.id} resData={restaurant}/>  
  
         ))}
      </div>
      </div>
    ) ; 
  };
  
  export default Body;
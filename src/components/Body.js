import { useState } from "react";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  // let ListOfRestaurants = [
  //   {
  //     data: {
  //       id: "334475",
  //       name: "KFC",
  //       cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
  //       costForTwo: 40000,
  //       deliveryTime: 36,
  //       avgRating: "3.8",
  //     },
  //   },
  //   {
  //     data: {
  //       id: "334477",
  //       name: "Dominos",
  //       cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
  //       costForTwo: 40000,
  //       deliveryTime: 36,
  //       avgRating: "4.2",
  //     },
  //   },
  //   {
  //     data: {
  //       id: "334476",
  //       name: "Biryani",
  //       cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
  //       costForTwo: 40000,
  //       deliveryTime: 36,
  //       avgRating: "3.8",
  //     },
  //   },
  // ];

  const [listOfRestaurants, setListOfRestaurants] = useState([
    {
      data: {
        id: "334475",
        name: "KFC",
        cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
        costForTwo: 40000,
        deliveryTime: 36,
        avgRating: "3.8",
      },
    },
    {
      data: {
        id: "334477",
        name: "Dominos",
        cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
        costForTwo: 40000,
        deliveryTime: 36,
        avgRating: "4.2",
      },
    },
    {
      data: {
        id: "334476",
        name: "Biryani",
        cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
        costForTwo: 40000,
        deliveryTime: 36,
        avgRating: "3.8",
      },
    },
  ]);

  return (
    <>
      <div className="body">
        <div className="btn__layout">
          <button
            className="top-rated"
            // onClick={() => {
            //   ListOfRestaurants = ListOfRestaurants.filter(
            //     (restaurant) => restaurant.data.avgRating > 4
            //   );
            //   console.log(ListOfRestaurants);
            // }}
            onClick={() => {
              setListOfRestaurants(
                listOfRestaurants.filter(
                  (restaurant) => restaurant.data.avgRating > 4
                )
              );
            }}
          >
            Top Rated Restaurants
          </button>
          <div className="search">
            <input type="search" name="" id="" placeholder="search" />
          </div>
        </div>
        <div className="restautants-container">
          {listOfRestaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.data.id} resData={restaurant} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Body;

/**
 * In React, when you directly change a variable
 * (like ListOfRestaurants), it doesn't trigger
 * a re-render of the component. To update the UI,
 * you should use the useState hook to manage the
 * state of the component.
 */

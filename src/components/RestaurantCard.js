const RestaurantCard = (props) => {
  const { name, avgRating } = props.resData.data;
  return (
    <>
      <div className="restaurant-card">
        <img src="https://norecipes.com/wp-content/uploads/2017/05/chicken-biryani-006.jpg" />
        <h4>{name}</h4>
        <h4>{avgRating}</h4>
      </div>
    </>
  );
};

export default RestaurantCard;

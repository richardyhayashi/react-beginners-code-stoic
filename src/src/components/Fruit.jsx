const Fruit = ({ name, price, emoji }) => {
  return (
    <>
      {/* {emoji} {name} ${price} */}
      {price > 5 ? (
        <li>
        <h3>
          {emoji} {name} ${price}
        </h3>
        </li>
      ) : (
        ""
      )}
    </>
  );
};

export default Fruit;

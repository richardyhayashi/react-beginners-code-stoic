const Fruit = ({ name, price, emoji, soldout }) => {
  return (
    <>
      <li>
        <h3>
          {emoji} {name} ${price} {soldout ? "soldout" : ""}
        </h3>
      </li>
    </>
  );
};

export default Fruit;

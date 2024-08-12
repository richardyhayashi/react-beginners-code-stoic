import Fruit from "./Fruit";

const Fruits = () => {
  //const fruits = ["Apple", "Mango", "Banna", "Orange", "Pineapple"];
  const fruits = [
    {name: "Apple", price: 10, emoji: "🍎"},
    {name: "Mango", price: 7, emoji: "🥭"},
    {name: "Banna", price: 2, emoji: "🍌"},
    {name: "Orange", price: 5, emoji: "🍊"},
    {name: "Pineapple", price: 8, emoji: "🍍"},
  ];

  return (
    <ul>
      {fruits.map(fruit => (
        <Fruit key={fruit.name} name={fruit.name} price={fruit.price} emoji={fruit.emoji} />
      ))}
    </ul>
  );
};

export default Fruits;

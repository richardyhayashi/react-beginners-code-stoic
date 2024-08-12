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
        <li key={fruit.name}>{fruit.emoji} {fruit.name} ${fruit.price}</li>
      ))}
    </ul>
  );
};

export default Fruits;

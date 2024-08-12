import Fruit from "./Fruit";

const Fruits = () => {
  //const fruits = ["Apple", "Mango", "Banna", "Orange", "Pineapple"];
  const fruits = [
    { name: "Apple", price: 10, emoji: "🍎", soldout: true },
    { name: "Mango", price: 7, emoji: "🥭", soldout: false },
    { name: "Banna", price: 2, emoji: "🍌", soldout: true },
    { name: "Orange", price: 5, emoji: "🍊", soldout: false },
    { name: "Pineapple", price: 8, emoji: "🍍", soldout: true },
  ];

  return (
    <ul>
      {fruits.map((fruit) => (
        <Fruit
          key={fruit.name}
          name={fruit.name}
          price={fruit.price}
          emoji={fruit.emoji}
          soldout={fruit.soldout}
        />
      ))}
    </ul>
  );
};

export default Fruits;

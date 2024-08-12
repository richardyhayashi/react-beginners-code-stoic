const Fruits = () => {
  const fruits = ["Apple", "Mango", "Banna", "Orange", "Pineapple"];

  return (
    <ul>
      {fruits.map((fruit) => (
        <li key={fruit}>{fruit}</li>
      ))}
    </ul>
  );
};

export default Fruits;

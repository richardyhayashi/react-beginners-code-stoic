import Fruits from "./components/Fruits";

function App() {
  const person = {
    name: "Rob",
    message: "Hi there!",
    emoji: "🥑",
    seatNumbers: [1, 4, 7],
  }

  return (
    <div>
      <Fruits />
    </div>
  );
}

export default App;

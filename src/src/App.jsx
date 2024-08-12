import ConditionalComponent from "./components/ConditionalComponent";
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
      <ConditionalComponent />
    </div>
  );
}

export default App;

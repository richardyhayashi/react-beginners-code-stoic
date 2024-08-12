import Hello from "./components/Hello";

function App() {
  const person = {
    name: "Rob",
    message: "Hi there!",
    emoji: "🥑",
    seatNumbers: [1, 4, 7],
  }

  return (
    <div>
      <Hello person={person} />
    </div>
  );
}

export default App;

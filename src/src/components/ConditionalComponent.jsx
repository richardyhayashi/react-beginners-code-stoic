import Code from "./Code";
import Welcome from "./Welcome";

const ConditionalComponent = () => {
  const display = false;
  let message;

  if (display) {
    message = <h1>This is message 1</h1>;
  } else {
    message = <h1>This is message 2</h1>;
  }

  return message;
};

export default ConditionalComponent;
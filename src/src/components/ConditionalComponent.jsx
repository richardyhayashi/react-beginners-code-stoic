import Code from "./Code";
import Welcome from "./Welcome";

const ConditionalComponent = () => {
  const display = true;

  if (display) {
    return <Welcome />;
  }

  return <Code />;
};

export default ConditionalComponent;
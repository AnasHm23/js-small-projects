import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

// here we all the components are located
export const Greeting = () => {
  return (
    <div>
      <p>
        hello <Person />, you have to hear this Message,
        <Message />
      </p>
    </div>
  );
};

const Person = () => <span>anas houmaid</span>;
const Message = () => {
  return <span>stop worring things are going to be alright inchallah</span>;
};

root.render(<Greeting />);

import { useState } from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [people, setPeople] = useState(data);

  const handleRemove = (id) => {
    setPeople(people.filter((person) => person.id !== id));
  };
  return (
    <div className="container">
      <ul>
        {people.map((person) => (
          <div>
            <li key={person.id}>{person.name}</li>
            <button type="button" onClick={() => handleRemove(person.id)}>
              remove item
            </button>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default UseStateArray;

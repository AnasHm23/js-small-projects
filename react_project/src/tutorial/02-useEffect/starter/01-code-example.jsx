import { useState, useEffect } from "react";

const url = "https://api.github.com/users";
const CodeExample = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const result = await response.json();
      console.log(result);
    };

    fetchData();
  }, []);
  return <h2>fetch data</h2>;
};
export default CodeExample;

import { useState, useEffect } from "react";
const url = "https://api.github.com/users/Anashm24";

const FetchData = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
    };

    fetchData();
  }, []);
};
export default FetchData;

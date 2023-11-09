import React, { useEffect, useState } from "react";
import axios from "axios";

const Test = () => {
  const [data, setData] = useState(null);
  console.log("hit");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios("http://localhost:8000/api/news");
        console.log(result.data);
        // setData(result.data.message);
      } catch (err) {
        console.log("Error fetched", err);
      }
    };
    fetchData();
  }, []);

  return <div> {data && <div> {JSON.stringify(data)} </div>} </div>;
};

export default Test;

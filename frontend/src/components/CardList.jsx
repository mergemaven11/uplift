import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from './Card'

function CardList() {
  const [lifts, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("http://127.0.0.1:8000/all_lifts")
      .catch((e) => console.error(e))

    //   console.log(result.data)

      setData(result.data);
    };

    fetchData();
  },[]);

  return (
    <div>
    {lifts.map(item => (
        <Card lift={item}/>
    ))} 
   
   </div>
  )
}

export default CardList;

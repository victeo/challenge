import React, { useEffect, useState } from "react";
import axios from 'axios';
import Quote from "../components/quote/Quote";

export default function QuoteGarden() {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://quote-garden.onrender.com/api/v3/quotes');
        // Handle the response data
        setQuotes(response.data.data || []); // Set the 'data' property as quotes or an empty array if it's falsy
      } catch (error) {
        console.error(error);
        // Handle errors
      }
    };

    fetchData();
  }, []);

  return <Quote info={quotes} />;
}

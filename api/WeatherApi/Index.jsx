import React, { useEffect, useState } from "react";
import axios from 'axios';
import Weather from "../../components/weather/";

export default function Index() {
  const [weather, setWeather] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = axios.get('https://api.met.no/weatherapi/locationforecast/2.0/complete?lat=60.10&lon=9.58')
        .then(response => {
          // Acessar os dados da resposta
          console.log(response);
          setWeather(response || []);
        })
        .catch(error => {
          // Lidar com erros
          console.error(error);
        });
        
      } catch (error) {
        console.error(error);
        // Handle errors
      }
    };
  
    fetchData();
  }, []);


  return <Weather info={weather} />;
}



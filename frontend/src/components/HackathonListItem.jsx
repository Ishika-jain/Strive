import React from "react";
import Tile from "./Tile";
import axios from "axios";
import { useState, useEffect } from "react";

const HackathonListItem = () => {
  const [data, setData] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:5000")
      .then((response) => {
        setData(response.data);
        setLoaded(true);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="h-screen bg-bg">
      <div className="bg-bg pt-20 h-fit">
        {loaded ? (
          <div className="flex flex-wrap  justify-center">
            {data.map((item, index) => {
              return (
                <div key={index}>
                  <Tile
                    key={index}
                    name={item.hackathonName}
                    link={item.hackathonLink}
                    status={item.status}
                    date={item.startDate}
                  />
                </div>
              );
            })}
          </div>
        ) : (
          <p className="text-3xl font-bold flex justify-center items-center w-full text-darkestBlue">
            Loading ...
          </p>
        )}
      </div>
    </div>
  );
};

export default HackathonListItem;

import React, { useState, useEffect } from "react";
import axios from "axios";
import PortfolioForm from "./PortfolioForm";
import CardContainer from "./CardContainer";

const Portfolios = () => {
  const [portfolio, setPortfolio] = useState([]);

  useEffect(() => {
    fetchPortfolio();
  }, []);

  const fetchPortfolio = async () => {
    try {
      const response = await axios.get("http://localhost:5000/portfolio");
      if (response.status === 200) {
        setPortfolio(response.data);
      }
    } catch (error) {
      console.error("Error fetching portfolio:", error);
    }
  };

  const handleUpload = async (newPost) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/portfolio",
        newPost
      );
      if (response.status === 201) {
        fetchPortfolio();
      }
    } catch (error) {
      console.error("Error uploading portfolio:", error);
    }
  };

  return (
    <div className="flex h-full p-8 w-full justify-around bg-bg">
      <div className="flex flex-wrap w-full h-full bg-bg">
        {portfolio.map(
          (item) =>
            item.name && (
              <CardContainer
                key={item.id}
                name={item.name}
                desc={item.description}
                link={item.link}
              />
            )
        )}
      </div>
      <div className="bg-bg">
        <PortfolioForm onUpload={handleUpload} />
      </div>
    </div>
  );
};

export default Portfolios;

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../Common/Header";
import Loader from "../Common/Loader";
import { coinObject } from "../functions/convertObject";
import List from "../Dashboard/List";
import CoinInfo from "../Coin/CoinInfo";

function CoinPage() {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  const [coinData, setCoinData] = useState();

  useEffect(() => {
    axios
      .get(`https://api.coingecko.com/api/v3/coins/${id}`)
      .then((response) => {
        coinObject(setCoinData, response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  });
  return (
    <div>
      <Header />
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="grey-wrapper">
            <List coin={coinData} />
          </div>
          <CoinInfo heading={coinData.name} desc={coinData.desc}/>
        </>
      )}
    </div>
  );
}

export default CoinPage;

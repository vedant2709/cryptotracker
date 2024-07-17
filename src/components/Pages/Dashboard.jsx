import React, { useEffect, useState } from "react";
import Header from "../Common/Header";
import TabsComponent from "../Dashboard/Tabs";
import axios from "axios";
import Search from "../Dashboard/Search";
import Notfound from "../Dashboard/NoFound";

function DashboardPage() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  const onSearchChange=(e)=>{
    setSearch(e.target.value)
  }
  
  const clearSearch=()=>{
    setSearch("")
  }

  var filteredCoins = coins.filter(
    (coin) =>
      coin.name.toLowerCase().includes(search.trim().toLowerCase()) ||
      coin.symbol.toLowerCase().includes(search.trim().toLowerCase())
  );

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=100"
      )
      .then((response) => {
        console.log(response);
        setCoins(response.data)
      })
      .catch((error) => {
        console.log(error);
      });
  });
  return (
    <div>
      <Header />
      <Search onSearchChange={onSearchChange} search={search}/>
      {/* {filteredCoins.length > 0 ? (
        <TabsComponent coins={filteredCoins} />
      ) : (
        <Notfound clearSearch={clearSearch}/>
      )} */}
      <TabsComponent coins={filteredCoins} />
    </div>
  );
}

export default DashboardPage;

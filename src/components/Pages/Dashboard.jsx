import React, { useEffect, useState } from "react";
import Header from "../Common/Header";
import TabsComponent from "../Dashboard/Tabs";
import axios from "axios";
import Search from "../Dashboard/Search";
import Notfound from "../Dashboard/NoFound";
import PaginationControlled from "../Dashboard/Pagination";
import Loader from "../Common/Loader";
import BackToTop from "../Common/BackToTop";

function DashboardPage() {
  const [coins, setCoins] = useState([]);
  const [paginatedCoins, setPaginatedCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const onSearchChange = (e, value) => {
    setSearch(e.target.value);
  };

  const clearSearch = () => {
    setSearch("");
  };

  var filteredCoins = coins.filter(
    (coin) =>
      coin.name.toLowerCase().includes(search.trim().toLowerCase()) ||
      coin.symbol.toLowerCase().includes(search.trim().toLowerCase())
  );

  const [page, setPage] = React.useState(1);
  const handlePageChange = (event, value) => {
    setPage(value);
    var previousIndex = (value - 1) * 10;
    setPaginatedCoins(coins.slice(previousIndex, previousIndex + 10));
    setIsLoading(false);
  };

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=100"
      )
      .then((response) => {
        console.log(response);
        setCoins(response.data);
        setPaginatedCoins(response.data.slice(0, 10));
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  });
  return (
    <>
      <Header />
      <BackToTop/>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <Search onSearchChange={onSearchChange} search={search} />
          {/* {filteredCoins.length > 0 ? (
        <TabsComponent coins={filteredCoins} />
      ) : (
        <Notfound clearSearch={clearSearch}/>
      )} */}
          <TabsComponent coins={search ? filteredCoins : paginatedCoins} />
          {!search && (
            <PaginationControlled
              page={page}
              handlePageChange={handlePageChange}
            />
          )}
        </div>
      )}
    </>
  );
}

export default DashboardPage;

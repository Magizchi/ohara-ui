import React, { useState, useEffect } from "react";
import ShowAllCards from "components/organisms/ShowCards/AllCards/ShowAllCards";
import Card from "models/Card";
import { formatCard } from "utils/card";
//constant
import API from "constants/API";

const TopManga = () => {
  const [topManga, setTopManga] = useState<Card[]>([]);
  const PATH = process.env.REACT_APP_PATH;

  useEffect(() => {
    fetch(PATH + API.TOPMANGA, {
      method: "GET",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json"
      }
    })
      .then(data => data.json())
      .then(res =>
        setTopManga(res.topmanga.map((manga: any) => formatCard(manga)))
      );
  }, [PATH]);

  if (topManga && topManga.length > 0) {
    return (
      <div className="w-full">
        <ShowAllCards title={"Top Manga"} show={topManga} more="/manga" />
      </div>
    );
  } else {
    return <p>Loading</p>;
  }
};

export default TopManga;

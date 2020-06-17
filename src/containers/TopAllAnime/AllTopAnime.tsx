import React, { useState, useEffect } from "react";
//Components
import ShowAllCards from "components/organisms/ShowCards/AllCards/ShowAllCards";
//Models
import Card from "models/Card";
//Utils
import { formatCard } from "utils/card";
//constant
import API from "constants/API";

const AllAnime = () => {
  const [topAnime, setTopAnime] = useState<Card[]>([]);
  const PATH = process.env.REACT_APP_PATH;

  useEffect(() => {
    fetch(PATH + API.TOPANIME, {
      method: "GET",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json"
      }
    })
      .then(data => data.json())
      .then(res =>
        setTopAnime(res.topanime.map((anime: any) => formatCard(anime)))
      );
  }, [PATH]);

  if (topAnime && topAnime.length > 0) {
    return (
      <div className="w-full">
        <ShowAllCards title={"All Anime"} show={topAnime} more="/anime" />
      </div>
    );
  } else {
    return <p>Loading</p>;
  }
};

export default AllAnime;

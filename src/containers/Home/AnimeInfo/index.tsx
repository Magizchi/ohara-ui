import Anime from "models/Anime";
import React, { FunctionComponent, useEffect, useState } from "react";
import { Collapse } from "react-collapse";
interface AnimeInfoProps {
  anime: Anime;
}
interface FunctionProps extends AnimeInfoProps {
  onClick: Function;
}
const AnimeInfo: FunctionComponent<FunctionProps> = ({ anime, onClick }) => {
  const [isCollapse, setIsCollapse] = useState<boolean>(false);

  useEffect(() => {
    if (anime.trailer === null && isCollapse === false) {
      setIsCollapse(true);
    } else if (anime.trailer !== null && isCollapse === true) {
      setIsCollapse(false);
    }
  }, [anime.trailer, isCollapse]);

  return (
    <div className="relative flex mt-10 mb-10 text-stars-500">
      <span className="absolute top-0 right-0">
        <i
          onClick={() => onClick()}
          className="fa-2x fas fa-times hover:text-orange-600"
        ></i>
      </span>
      <div className="w-4/12 mr-10">
        <h2 className="text-lg">{anime.title}</h2>
        <p>{anime.episodes} episodes</p>
        {/* <p>Genre:</p> */}
        <p>Opening:</p>
        <ul>
          {anime.opening.map((op, index) => (
            <li key={index} className="ml-3">
              - {op}
            </li>
          ))}
        </ul>
        <p>Ending</p>
        <ul>
          {anime.ending.map((end, index) => (
            <li key={index} className="ml-3">
              - {end}
            </li>
          ))}
        </ul>
      </div>
      <div className="w-8/12 pt-8">
        {anime.trailer && (
          <iframe
            style={{ width: "100%", height: "400px" }}
            src={anime.trailer}
            frameBorder="0"
            allow="encrypted-media"
            allowFullScreen
            title="video"
            className="mb-5"
          />
        )}
        <div className="flex items-center">
          <p className="mr-5">Synopsis</p>
          <button
            style={{ outline: "none" }}
            onClick={() => setIsCollapse(!isCollapse)}
          >
            {isCollapse ? (
              <i className="flex items-center justify-center w-5 h-5 rounded-full fas fa-chevron-down hover:bg-blueGray-600"></i>
            ) : (
              <i className="flex items-center justify-center w-5 h-5 rounded-full hover:bg-blueGray-600 fas fa-chevron-up"></i>
            )}
          </button>
        </div>
        <Collapse isOpened={isCollapse}>
          <p>{anime.synopsis}</p>
        </Collapse>
      </div>
    </div>
  );
};

export default AnimeInfo;

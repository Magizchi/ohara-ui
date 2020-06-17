import Manga from "models/Manga";
import React, { FunctionComponent } from "react";

interface MangaInfoProps {
  manga: Manga;
}
interface FunctionProps extends MangaInfoProps {
  onClick: Function;
}
const MangaInfo: FunctionComponent<FunctionProps> = ({ manga, onClick }) => {
  return (
    <div className="relative flex mt-10 mb-10 text-stars-500">
      <span className="absolute top-0 right-0">
        <i
          onClick={() => onClick()}
          className="fa-2x fas fa-times hover:text-orange-600"
        ></i>
      </span>
      <div className="w-4/12 mr-10">
        <h2 className="text-lg">{manga.title}</h2>
        <p>{manga.volumes} volumes</p>
        <p>{manga.chapters} chapters</p>
        <p>Published {manga.published}</p>
        {/* <p>Genre:</p> */}
        <p>Status: {manga.status}</p>
      </div>
      <div className="w-8/12 pt-8">
        <p className="mr-5">Synopsis: </p>
        <p>{manga.synopsis}</p>
      </div>
    </div>
  );
};

export default MangaInfo;

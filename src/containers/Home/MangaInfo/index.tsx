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
    <article className="flex flex-col mt-10 mb-10 text-stars-500">
      <div className="flex justify-end">
        <i
          onClick={() => onClick()}
          className="fa-2x fas fa-times hover:text-orange-600"
        ></i>
      </div>
      <div className="flex w-full">
        <div className="w-4/12 mr-10">
          <h2 className="text-lg">{manga.title}</h2>
          {manga.volumes && <p>{manga.volumes} volumes</p>}
          {manga.chapters && <p>{manga.chapters} chapters</p>}
          <p>Published {manga.published}</p>
          {/* <p>Genre:</p> */}
          <p>Status: {manga.status}</p>
        </div>
        <div className="w-8/12">
          <p className="mr-5">Synopsis: </p>
          <p>{manga.synopsis}</p>
        </div>
      </div>
    </article>
  );
};

export default MangaInfo;

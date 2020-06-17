//Models
import Manga, { mangaBuilder } from "models/Manga";
import React, { useState } from "react";

const MangaPage = () => {
  const [manga, setManga] = useState<Manga>(mangaBuilder());

  return (
    <main className="flex justify-center w-full h-full bg-gray-800">
      <section className="container flex h-full m-2">
        <div className="pt-3">
          <img src={manga.image} alt={manga.title} className="w-56 h-auto" />
        </div>
        <div className="flex flex-col w-3/5 pl-3 text-orange-500">
          <div className="flex items-center">
            <h1 className="m-0 text-3xl font-bold text-orange-500">
              {manga.title}
            </h1>
          </div>
          <p>Note: {manga.score}</p>
          <p>Genre: {manga.genres.join(", ")}</p>
          <p>Status: {manga.status}</p>
          <p>type: {manga.type}</p>
          <p>chapters: {manga.chapters}</p>
          <p>Volums: {manga.volumes}</p>
          <p className="text-sm text-justify">{manga.synopsis}</p>
        </div>
      </section>
    </main>
  );
};

export default MangaPage;

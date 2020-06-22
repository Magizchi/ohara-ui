import API from "constants/API";
import Routes from "constants/Routes";
import Manga, { mangaBuilder } from "models/Manga";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { formatManga } from "utils/manga";

const MangaPage = () => {
  const [manga, setManga] = useState<Manga>(mangaBuilder());
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);
  const { id } = useParams();
  const PATH = process.env.REACT_APP_PATH;

  useEffect(() => {
    const getManga = async () => {
      await fetch(PATH + API.MANGA_DETAIL + "/" + id)
        .then((data) => data.json())
        .then((res) => {
          setManga(formatManga(res.response));
        });
    };
    getManga();
  }, [id, PATH]);

  return (
    <main className="flex flex-col items-center pt-12">
      <section className="container flex flex-col">
        <div>
          <Link
            to={Routes.HOME_PAGE}
            className="w-auto mr-5 font-bold text-center text-orange-600 bg-transparent border-b-2 border-transparent hover:border-orange-500"
          >
            <i className="mr-1 fas fa-arrow-left" /> Back to Home
          </Link>
        </div>
        <div className="flex">
          <aside className="pt-3">
            <img src={manga.image} alt={manga.title} className="w-56 h-auto" />
          </aside>
          <div className="flex flex-col w-3/5 pl-3">
            <div className="flex items-center">
              <h1 className="m-0 text-3xl font-bold text-orange-500">
                {manga.title}
              </h1>
              <i
                onClick={() => setIsOpen(true)}
                className="ml-2 text-red-700 cursor-pointer fab fa-youtube fa-2x"
              ></i>
            </div>
            <p className="mb-1 text-stars-500">
              <span className="mr-2 text-orange-500">Score:</span>
              {manga.score}
              <br />
              <span className="mr-2 text-orange-500">Genres:</span>
              {manga.genres.join(", ")}
              <br />

              <span className="mr-2 text-orange-500">Published:</span>
              {manga.published}
              <br />

              <span className="mr-2 text-orange-500">synopsis:</span>
              {manga.synopsis}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default MangaPage;

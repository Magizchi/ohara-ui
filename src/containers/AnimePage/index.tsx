import API from "constants/API";
import Routes from "constants/Routes";
import Anime, { animeBuilder } from "models/Anime";
import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { Link, useParams } from "react-router-dom";
import { formatAnime } from "utils/anime";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, -50%)",
    width: "60%",
    height: "60%",
    background: "rgba(255, 255, 255, .6)",
  },
};

const AnimePage = () => {
  const [anime, setAnime] = useState<Anime>(animeBuilder());
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);
  const PATH = process.env.REACT_APP_PATH;
  const { id } = useParams();

  useEffect(() => {
    const getAnime = async () => {
      await fetch(PATH + API.ANIME_DETAIL + "/" + id)
        .then((data) => data.json())
        .then((res) => {
          setAnime(formatAnime(res.response));
        });
    };
    getAnime();
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
            <img src={anime.image} alt={anime.title} className="w-56 h-auto" />
            <Modal
              isOpen={modalIsOpen}
              onRequestClose={() => setIsOpen(false)}
              style={customStyles}
              contentLabel="Example Modal"
            >
              <iframe
                style={{ width: "100%", height: "100%" }}
                src={anime.trailer}
                frameBorder="0"
                allow="encrypted-media"
                allowFullScreen
                title="video"
              />
            </Modal>
          </aside>
          <div className="flex flex-col w-3/5 pl-3">
            <div className="flex items-center">
              <h1 className="m-0 text-3xl font-bold text-orange-500">
                {anime.title}
              </h1>
              <i
                onClick={() => setIsOpen(true)}
                className="ml-2 text-red-700 cursor-pointer fab fa-youtube fa-2x"
              ></i>
            </div>
            <p className="mb-1 text-stars-500">
              <span className="mr-2 text-orange-500">Score:</span>
              {anime.score}
              <br />
              <span className="mr-2 text-orange-500">Genres:</span>
              {anime.genres.join(", ")}
              <br />
              <span className="mr-2 text-orange-500">Premiered:</span>
              {anime.premiered}
              <br />
              <span className="mr-2 text-orange-500">Published:</span>
              {anime.published}
              <br />
              <span className="mr-2 text-orange-500">Duration:</span>
              {anime.duration}
              <br />
              <span className="mr-2 text-orange-500">synopsis:</span>
              {anime.synopsis}
            </p>
            <ul className="mb-1 text-stars-500">
              <span className="mr-2 text-orange-500">Opening:</span>
              {anime.opening.map((op: string, index: number) => (
                <li key={index} className="ml-5">
                  <p key={index} className="m-0">
                    - {op}
                  </p>
                </li>
              ))}
            </ul>
            <ul className="mb-1 text-stars-500">
              <span className="mr-2 text-orange-500">Ending:</span>
              {anime.ending.map((end: string, index: number) => (
                <li key={index} className="ml-5">
                  <p key={index} className="m-0">
                    - {end}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AnimePage;

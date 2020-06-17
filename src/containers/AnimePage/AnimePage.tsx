import React, { useEffect, useState } from "react";
import { formatAnime } from "utils/anime";
import Modal from "react-modal";
import Anime, { animeBuilder } from "models/Anime";
import { useParams } from "react-router-dom";
//constants
import API from "constants/API";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, -50%)",
    width: "60%",
    height: "60%",
    background: "rgba(255, 255, 255, .6)"
  }
};

const AnimePage = () => {
  const [anime, setAnime] = useState<Anime>(animeBuilder());
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);
  const PATH = process.env.REACT_APP_PATH;
  const { id } = useParams();

  useEffect(() => {
    const getAnime = async () => {
      await fetch(PATH + API.ANIMEDETAIL + "/" + id)
        .then(data => data.json())
        .then(res => {
          setAnime(formatAnime(res.response));
        });
    };
    getAnime();
  }, [id, PATH]);

  return (
    <main
      className="flex justify-center w-full h-full"
      style={{ backgroundColor: "rgba(245,245,245,0.1)" }}
    >
      <section
        className="container h-full flex p-2"
        style={{ backgroundColor: "rgba(10,10,10,0.6)" }}
      >
        <div className="pt-3">
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
        </div>
        <div className="flex flex-col w-3/5 text-orange-500 pl-3">
          <div className="flex items-center">
            <h1 className="text-3xl text-orange-500 font-bold m-0">
              {anime.title}
            </h1>
            <i
              onClick={() => setIsOpen(true)}
              className="fab fa-youtube fa-2x ml-2 text-red-700 cursor-pointer"
            ></i>
          </div>
          <p>Note: {anime.score}</p>
          {/* <p>Genre: {anime.genres.join(", ")}</p> */}
          <p className="text-justify text-sm">{anime.synopsis}</p>
          <div>
            Opening:{" "}
            {anime.opening.map((op: string, index: number) => (
              <p key={index} className="m-0">
                - {op}
              </p>
            ))}
          </div>
          <div>
            Ending:{" "}
            {anime.ending.map((end: string, index: number) => (
              <p key={index} className="m-0">
                - {end}
              </p>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default AnimePage;

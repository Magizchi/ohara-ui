import LoadingSVG from "assets/svg/Ellipsis.svg";
import Card from "components/molecules/Card";
import API from "constants/API";
import Anime, { animeBuilder } from "models/Anime";
import Home, { homeBuilder } from "models/Home";
import Manga, { mangaBuilder } from "models/Manga";
import React, { useEffect, useState } from "react";
import { Collapse } from "react-collapse";
import Slider from "react-slick";
import { formatAnime } from "utils/anime";
import { formatCard } from "utils/card";
import { formatManga } from "utils/manga";
import AnimeInfo from "./AnimeInfo";
import MangaInfo from "./MangaInfo";

const HomePage = () => {
  const [homeInfo, setHomeInfo] = useState<Home>(homeBuilder());
  const [PATH] = useState(process.env.REACT_APP_PATH);
  const [animeId, setAnimeId] = useState<number>();
  const [mangaId, setMangaId] = useState<number>();
  const [selectedAnime, setSelectedAnime] = useState<Anime>(animeBuilder());
  const [selectedManga, setSelectedManga] = useState<Manga>(mangaBuilder());
  const [animeCollapse, setAnimeCollapse] = useState<boolean>(false);
  const [MangaCollapse, setMangaCollapse] = useState<boolean>(false);

  useEffect(() => {
    fetch(PATH + API.HOME, { mode: "cors" })
      .then((data) => data.json())
      .then((res) =>
        setHomeInfo({
          favorite: res.result.favorite.map((favorite: any) =>
            formatCard(favorite)
          ),
          anime: res.result.anime.map((anime: any) => formatCard(anime)),
          manga: res.result.manga.map((manga: any) => formatCard(manga)),
        })
      );
  }, [PATH]);

  useEffect(() => {
    animeId &&
      fetch("https://api.jikan.moe/v3/anime/" + animeId, { mode: "cors" })
        .then((data) => data.json())
        .then((res) => {
          setSelectedAnime(formatAnime(res));
          setSelectedManga(mangaBuilder());
          setAnimeCollapse(true);
          setMangaCollapse(false);
        });
  }, [animeId]);

  useEffect(() => {
    mangaId &&
      fetch("https://api.jikan.moe/v3/manga/" + mangaId, { mode: "cors" })
        .then((data) => data.json())
        .then((res) => {
          setSelectedManga(formatManga(res));
          setSelectedAnime(animeBuilder());
          setAnimeCollapse(false);
          setMangaCollapse(true);
        });
  }, [mangaId]);

  if (homeInfo && homeInfo.anime.length > 0) {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 7,
      slidesToScroll: 6,
    };
    return (
      <main className="flex flex-col items-center bg-darkblue-500">
        <section id="#anime" className="container flex flex-col mb-8 ">
          <h2 className="text-lg font-bold text-orange-500">Top Anime</h2>
          <Collapse isOpened={animeCollapse}>
            <AnimeInfo
              anime={selectedAnime}
              onClick={() => {
                setAnimeCollapse(!animeCollapse);
                setSelectedAnime(animeBuilder());
              }}
            />
          </Collapse>
          <Slider className="text-black" {...settings}>
            {homeInfo.anime.map((m, index: number) => {
              return (
                <Card
                  key={index}
                  image={m.image}
                  title={m.title}
                  id={m.id}
                  onClick={setAnimeId}
                />
              );
            })}
          </Slider>
        </section>
        <section id="#manga" className="container">
          <h2 className="text-lg font-bold text-orange-500">Top Manga</h2>
          <Collapse isOpened={MangaCollapse}>
            <MangaInfo
              manga={selectedManga}
              onClick={() => setMangaCollapse(!MangaCollapse)}
            />
          </Collapse>
          <ul>
            <Slider {...settings}>
              {homeInfo.manga.map((m, index: number) => {
                return (
                  <Card
                    key={index}
                    image={m.image}
                    title={m.title}
                    id={m.id}
                    onClick={setMangaId}
                  />
                );
              })}
            </Slider>
          </ul>
        </section>
      </main>
    );
  } else {
    return (
      <main className="flex items-center justify-center w-full h-full">
        <img
          className="bg-no-repeat"
          src={LoadingSVG}
          alt="Rolling"
          height="138"
          width="138"
        />
      </main>
    );
  }
};

export default HomePage;

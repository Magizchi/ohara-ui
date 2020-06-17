import Anime from "models/Anime";

export const formatAnime = (props: any): Anime => ({
  title: props.title,
  image: props.image_url,
  trailer: props.trailer_url,
  score: props.score,
  synopsis: props.synopsis,
  episodes: props.episodes,
  // genres: props.genres.map((genre: any) => genre.name),
  opening: props.opening_themes,
  ending: props.ending_themes,
  id: props.mal_id,
});

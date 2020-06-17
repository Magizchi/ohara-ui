import Manga from "models/Manga";

export const formatManga = (props: any): Manga => ({
  title: props.title,
  image: props.image_url,
  score: props.score,
  synopsis: props.synopsis,
  genres: props.genres.map((genre: any) => genre.name),
  status: props.status,
  published: props.published.string,
  type: props.type,
  volumes: props.volumes,
  chapters: props.chapters,
  id: props.mal_id,
});

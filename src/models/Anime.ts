interface Anime {
  title: string;
  image: string;
  trailer: string;
  score: number;
  synopsis: string;
  genres: string[];
  opening: string[];
  ending: string[];
  id: number;
  episodes: number;
  published: string;
  duration: string;
  premiered: string;
}

export const animeBuilder = (values: Partial<Anime> = {}): Anime => ({
  title: "",
  image: "",
  trailer: "",
  episodes: 0,
  premiered: "",
  score: 0,
  synopsis: "",
  genres: [],
  opening: [],
  ending: [],
  id: 0,
  published: "",
  duration: "",
  ...values,
});

export default Anime;

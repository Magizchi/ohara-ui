interface Manga {
  title: string;
  status: string;
  type: string;
  volumes: string;
  chapters: string;
  published: string;
  image: string;
  score: number;
  synopsis: string;
  genres: string[];
  id: number;
}

export const mangaBuilder = (values: Partial<Manga> = {}): Manga => ({
  title: "",
  status: "",
  type: "",
  volumes: "",
  chapters: "",
  published: "",
  image: "",
  score: 0,
  synopsis: "",
  genres: [],
  id: 0,
  ...values,
});

export default Manga;

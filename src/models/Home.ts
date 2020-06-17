import Card from "./Card";

//Models

interface Home {
  favorite: Card[];
  anime: Card[];
  manga: Card[];
}

export const homeBuilder = (values: Partial<Home> = {}): Home => ({
  favorite: [],
  anime: [],
  manga: [],
  ...values
});

export default Home;

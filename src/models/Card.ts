interface Card {
  title: string;
  image: string;
  score?: number;
  id: number;
}

export const cardBuilder = (values: Partial<Card> = {}): Card => ({
  title: "",
  image: "",
  score: 0,
  id: 0
});

export default Card;

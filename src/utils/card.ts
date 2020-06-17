import Card from "models/Card";

export const formatCard = (props: any): Card => ({
  title: props.title,
  image: props.image_url,
  score: props.score,
  id: props.mal_id
});

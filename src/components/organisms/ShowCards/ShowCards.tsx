import Card from "components/molecules/Card";
//Models
import ModelsCard from "models/Card";
import React from "react";

interface CardProps {
  title: string;
  more: string;
  show: ModelsCard[];
  className?: string;
}

const CardList = (props: CardProps) => {
  if (props.show && props.show.length > 0) {
    return (
      <div className="container z-20 flex flex-col justify-center w-full bg-transparent sm:items-center">
        <div className="flex flex-wrap justify-around">
          {props.show.slice(0, 7).map((m, index: number) => {
            return (
              <Card
                key={index}
                image={m.image}
                title={m.title}
                id={m.id}
                more={props.more}
              />
            );
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default CardList;

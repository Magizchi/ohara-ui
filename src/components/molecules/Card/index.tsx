import React, { FunctionComponent, useState } from "react";

interface CardProps {
  title: string;
  image: string;
  id: number;
  more?: string;
  score?: number;
  onClick?: Function | any;
}

const Card: FunctionComponent<CardProps> = ({ title, image, id, onClick }) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <div
      onMouseOver={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      onClick={() => onClick(id)}
      className="w-full m-2 list-none cursor-pointer sm:w-auto sm:h-64"
    >
      <div
        className="hidden w-40 h-64 sm:scale-110 sm:bg-cover sm:bg-no-repeat sm:block"
        style={{
          backgroundImage: `url(${image})`,
          height: "100%",
        }}
      >
        {isHover && (
          <div
            className="flex items-center justify-center h-full text-center"
            style={{ backgroundColor: "rgba(255,255,255,0.7)" }}
          >
            <p className="font-bold text-darkblue-500">{title}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;

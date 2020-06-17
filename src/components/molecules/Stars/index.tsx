import React, { FunctionComponent } from "react";

interface StarProps {
  score: number | undefined;
}

const Rounded = (score: number = 0) => {
  let TabStars = [];
  if (score === 0) {
    return (TabStars = Array(10).fill(
      <i className="text-white far fa-star" />
    ));
  }
  if (score) {
    let RoundedScore = Math.round(score / 2);
    for (let i = 0; i < RoundedScore; i++) {
      TabStars.push(
        <i className="text-white fas fa-star"></i>
        // <img
        //   key={i}
        //   src={starSvg}
        //   className="text-white"
        //   alt="Smiley face"
        //   height="20"
        //   width="20"
        // />
      );
    }
  }
  return TabStars;
};

const Stars: FunctionComponent<StarProps> = ({ score }) => {
  return <div className="absolute bottom-0 flex mb-5">{Rounded(score)}</div>;
};

export default Stars;

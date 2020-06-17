import React from "react";
import Card from "components/molecules/Card";

//Models
import ModelsCard from "models/Card";

interface AnimeArray {
  title: string;
  more: string;
  show: ModelsCard[];
}

const Animes = (props: AnimeArray) => {
  if (props.show && props.show.length > 0) {
    return (
      <div id="Show" className="flex justify-center w-full z-20 bg-gray-800">
        <div className="ml-1 mr-1 flex justify-around w-full">
          <div className="xl:w-11/12">
            <h1
              className="leading-loose text-2xl text-orange-500"
              style={{ fontFamily: "Pacifico" }}
            >
              {props.title}
            </h1>
            <div className="flex">
              <div className="flex flex-wrap w-full h-full">
                {props.show.map((m, index: number) => {
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
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default Animes;

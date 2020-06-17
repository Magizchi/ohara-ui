import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom";

interface ButtonProps {
  link: string;
  name: string;
  classNames: string;
}

const Button: FunctionComponent<ButtonProps> = ({ link, name, classNames }) => {
  return (
    <Link
      to={link}
      // className="w-20 p-2 m-2 font-bold text-center text-orange-600 bg-transparent border-2 border-orange-500 rounded-full shadow-md sm:w-32 hover:bg-orange-500 hover:text-black"
      className="mr-5 font-bold text-center text-orange-600 bg-transparent border-b-2 border-transparent hover:text-darkblue-500 hover:border-orange-500 hover:text-black"
    >
      {name}
    </Link>
  );
};

export default Button;

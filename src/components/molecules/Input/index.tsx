import React from "react";

interface inputs {
  name: string;
  label: string;
  type: string;
}

const Inputs = (props: inputs) => {
  return (
    <div className="flex flex-col justify-start w-64 m-2 ml-4">
      <label htmlFor={props.name} className="pb-1 text-orange-500">
        {props.label}
      </label>
      <input
        type={props.type}
        name={props.name}
        className="pl-2 pr-2 bg-white rounded-full "
      />
    </div>
  );
};

export default Inputs;

import React from "react";
import { Field } from "formik";

interface inputs {
  name: string;
  label: string;
  type: string;
}

const Inputs = (props: inputs) => {
  return (
    <div className="flex flex-col justify-start w-64 m-2 ml-4">
      <label htmlFor={props.name} className="text-orange-500 pb-1">
        {props.label}
      </label>
      <Field
        type={props.type}
        name={props.name}
        className=" bg-white rounded-full pl-2 pr-2"
      />
    </div>
  );
};

export default Inputs;

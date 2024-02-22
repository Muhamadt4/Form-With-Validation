import React, { useState } from "react";
import "./form.css";

export default function Forminput(props) {
  const [trigger, setTrigger] = useState(false);

  const handleTrigger = () => {
    setTrigger(true);
  };
  const { label, onChange, id, ...inputptops } = props;
  return (
    <div className="flex justify-center flex-col">
      <label className="pl-[10%] text-white  ">{label}</label>
      <input
        className="w-[80%] my-3 mx-auto rounded-lg shadow-sm pl-4 p-2"
        {...inputptops}
        id={id}
        onChange={onChange}
        onBlur={handleTrigger}
        trigger={trigger.toString()}
      ></input>
      <span className="text-red-400 pb-3 pl-[10%]">{props.errormessage}</span>
    </div>
  );
}

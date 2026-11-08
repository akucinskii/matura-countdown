import React from "react";
import Smallblock from "./SmallBlock.jsx";

function BigCard({ item }) {
  return (
    <div className="grid grid-cols-4 gap-4">
      <div className="">
        <Smallblock item={item.days} />
        <p>{item.days > 1 ? " days" : " days"}</p>
      </div>
      <div className="">
        <Smallblock item={item.hours} />
        <p>{item.days > 1 ? " hours" : " hours"}</p>
      </div>
      <div className="">
        <Smallblock item={item.minutes} />
        <p>{item.days > 1 ? " minutes" : "minutes"}</p>
      </div>
      <div className="">
        <Smallblock item={item.seconds} />
        <p>{item.days > 1 ? "seconds" : " seconds"}</p>
      </div>
    </div>
  );
}

export default BigCard;

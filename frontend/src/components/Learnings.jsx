import React from "react";
import Card from "./Card";

const Learnings = () => {
  return (
    <div className="h-full text-white bg-bg">
        <div className="mx-8  pt-16 flex flex-wrap gap-4  justify-center">
          <Card skill="React" route="react" />
          <Card skill="Node" route="node" />
          <Card skill="React Native" route="native" />
        </div>
    </div>
  );
};

export default Learnings;

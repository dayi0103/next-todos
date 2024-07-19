import React from "react";

interface Props {}

const Title: React.FC<Props> = ({}) => {
  return (
    <div className="flex gap-2">
      <div className="text-blue-500 font-extrabold">Todos</div>
      <div className="text-violet-400 font-thin">dayi</div>
    </div>
  );
};

export default Title;

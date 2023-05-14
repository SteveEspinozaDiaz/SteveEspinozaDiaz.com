import React from "react";

interface propsType {
    title: string,
    Icon: React.ElementType
}

function WrapperMainTitle({title, Icon}: propsType) {
  return (
    <div className="flex items-center text-center mb-4 bg-stone-800 p-6 rounded-md">
        {<Icon className="w-16 h-16"/>}
        <h1 className="ml-2">{title}</h1>
    </div>);
}

export default WrapperMainTitle;

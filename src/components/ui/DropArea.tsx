"use client";

import { useState } from "react";

type TDropArea = {
  onDrop: () => void;
};
const DropArea = ({ onDrop }: TDropArea) => {
  const [isVisible, setIsVisible] = useState(false);

  const visibleArea = () => {
    setIsVisible(true);
  };

  const invisibleArea = () => {
    setIsVisible(false);
  };

  return (
    <div
      className={`w-full h-6 transition-[opacity,padding] relative before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-gray-300 before:border before:border-dashed before:border-gray-600 only:h-32 rounded-md ${
        isVisible ? "py-8 opacity-100" : "opacity-0"
      }`}
      onDragEnter={visibleArea}
      onDragLeave={invisibleArea}
      onDrop={() => {
        onDrop();
        invisibleArea();
      }}
      onDragOver={(e) => e.preventDefault()}
    >
      <h1>This is DropArea component</h1>
    </div>
  );
};

export default DropArea;

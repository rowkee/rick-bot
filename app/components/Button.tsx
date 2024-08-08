import React from "react";

interface ButtonProps {
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ onClick }) => {
  return (
    <>
      <button
        className="btn btn-wide sm:btn-sm md:btn-md lg:btn-lg"
        onClick={onClick}
      >
        Clrick Here
      </button>
    </>
  );
};

export default Button;

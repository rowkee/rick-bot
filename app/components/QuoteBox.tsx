import React from "react";

interface QuoteBoxProps {
  rickPhrase: string;
}

const QuoteBox: React.FC<QuoteBoxProps> = ({ rickPhrase }) => {
  return (
    <textarea
      className="textarea textarea-bordered my-8"
      placeholder={rickPhrase}
      readOnly
    ></textarea>
  );
};

export default QuoteBox;

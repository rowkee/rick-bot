import Image from "next/image";
import QuoteBox from "./components/QuoteBox";
import Button from "./components/Button";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen">
      <p className="mx-60">
        Hello there. This is a website for all of you who have worked with me,
        enjoyed my looks and wit. You can now just push a button to get it. Like
        a super crappy AI.....without any I, A or otherwise.{" "}
      </p>
      <QuoteBox />
      <Button />
    </div>
  );
}

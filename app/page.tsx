"use client";

import QuoteBox from "./components/QuoteBox";
import Button from "./components/Button";
import { useState } from "react";

const rickPhrases: string[] = [
  "Hello, nice to meet you (secretly dies inside).",
  "Just do what your boss tells you, it's easier that way.",
  "It's only software, no one is going to die.",
  "Let's schedule some time for chit-chat",
  "Happy Monday everyone, it's nearly Friday ish.",
  "Don't forget to wash your feet everyday",
  "Fuck management, bunch of bores.",
  "God, I hate Jira.",
  "We need a Definition of Done and a Definition of Ready....don't you dare groan.",
];

export default function Home() {
  const [quote, setQuote] = useState("What wisdom will Rick share.....");

  const generateQuote = () => {
    const randomQuote =
      rickPhrases[Math.floor(Math.random() * rickPhrases.length)];
    setQuote(randomQuote);
  };

  return (
    <div className="flex flex-col items-center justify-start min-h-screen">
      <p className="mx-60 items-center mt-12">
        Hello there. This is a website for all of you who have worked with me,
        enjoyed my looks and wit. You can now just push a button to get it. Like
        a super crappy AI.....without any I, A or otherwise.{" "}
      </p>
      <QuoteBox rickPhrase={quote} />
      <Button onClick={generateQuote} />
    </div>
  );
}

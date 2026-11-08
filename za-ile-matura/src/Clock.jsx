import React, { useState, useEffect } from "react";
import BigCard from "./BigCard.jsx";
import Card from "./Card.jsx";
import Footer from "./Footer.jsx";

function Clock() {
  const year = new Date().getFullYear() + 1;
  const calcTimeLeft = () => {
    let diff = new Date(`01/01/${year}`) - new Date();
    let timeLeft = {};

    if (diff > 0) {
      timeLeft = {
        millis: diff,
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / 1000 / 60) % 60),
        seconds: Math.floor((diff / 1000) % 60),
        hoursFull: Math.floor(diff / (1000 * 60 * 60)),
        minutesFull: Math.floor(diff / (1000 * 60)),
        secondsFull: Math.floor(diff / 1000),
      };
    }

    return timeLeft;
  };
  const [timeLeft, setTimeLeft] = useState(calcTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calcTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });
  const element = (
    <div className="flex flex-col gap-4 text-center m-2">
      <h1 className="text-4xl">Countdown to {year}:</h1>
      <BigCard item={timeLeft} />
      <h1 className="text-4xl">Detail:</h1>
      <div className="flex flex-col gap-4">
        <Card item={timeLeft.hoursFull} text="Hours" />
        <Card item={timeLeft.minutesFull} text="Minutes" />
        <Card item={timeLeft.secondsFull} text="Seconds" />
      </div>
      <Footer classname="pos" />
    </div>
  );
  return element;
}
export default Clock;

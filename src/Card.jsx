 import { useState, useEffect } from "react";
import dummyImg from "./assets/images/2.jpg";
const Card = ({heading, para, imgSrc, authorlight, authordark}) => {
  const [dark, setDark] = useState(false);
    console.table([heading, para, imgSrc, authorlight, authordark]);
  useEffect(() => {
    //change color theme based on flag
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    <div id="wrapper">
      <div
        id="dummy-cards"
        className=" min-w-[25rem] h-[35rem] dark:bg-gray-800 m-5 rounded-3xl shadow-lg shadow-cyan-500/50 overflow-hidden bg-slate-50"
      >
        <div id="img-box">
          <img
            src={!imgSrc ? dummyImg : imgSrc}
            alt=""
            className="w-[25rem] h-[15rem] dark:bg-gray-700 rounded-t-3xl bg-slate-100"
          />
        </div>
        <div
          id="contents"
          className="w-[25rem] flex flex-col items-center my-5 px-4"
        >
          <h2 className="text-2xl dark:text-white font-bold font-mono underline underline-offset-4 dark:decoration-sky-500 text-zinc-900 decoration-red-400">
            {!heading ? "Dummy Heading" : heading}
          </h2>
          <p className="w-[20rem] h-[12rem] dark:text-white text-sm font-sans text-justify pt-2 text-zinc-700">
            {para}
          </p>
        </div>
        <div className="flex justify-around items-baseline">
          <h3 className="text-md italic dark:text-white font-semibold font-serif text-red-600">
            {dark ? authordark : authorlight}
          </h3>
          <button
            type="button"
            className="rounded-md dark:bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm dark:hover:bg-blue-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 dark:focus-visible:outline-white bg-zinc-900 hover:bg-zinc-700"
            onClick={() => setDark(!dark)}
          >
            Click Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;

import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center bg-darkblue-500">
      <div className="w-full border-t-2 border-orange-500" />
      <section className="container flex items-center justify-between">
        <div className="flex items-center w-6/12">
          <img
            width="55"
            height="55"
            alt="Jikan logo"
            className="m-5 "
            src="https://static.apiary.io/assets/fX9wgjhh.png"
          />
          <div>
            <a
              href="https://jikan.moe/"
              className="text-4xl text-orange-500 underline"
            >
              Jikan API
            </a>
            <p className="text-orange-500">Unofficial MyAnimeList API</p>
          </div>
        </div>
        <div className="flex flex-col text-orange-500">
          <a href="https://github.com/Magizchi">
            <i className="text-orange-500 fab fa-3x fa-github"></i>
          </a>
        </div>
      </section>
    </footer>
  );
};

export default Footer;

import React from "react";
import github from "../assets/images/github.svg";

const Footer = () => (
  <footer className="text-gray-600 fixed body-font bg-gray-300 inset-x-0 bottom-0">
    <div className="container px-5 py-0 justify-content-around mx-auto flex items-center sm:flex-row flex-col">
      <a
        href="https://www.crio.do/crio-winter-of-doing/"
        target="_blank"
        rel="noreferrer"
        className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900"
      >
        <span className="ml-3 text-xl">CWoD</span>
      </a>
      <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
        © 2020 ArjunGarg —
        <a
          href="https://twitter.com/arjungarg07"
          className="text-gray-600 ml-1"
          rel="noopener noreferrer"
          target="_blank"
        >
          @arjungarg07
        </a>
      </p>
      <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
        <a
          href="https://github.com/arjungarg07"
          target="_blank"
          rel="noreferrer"
          className="text-gray-500"
        >
          <img
            className="cursor-pointer"
            alt="github icon"
            width="30"
            src={github}
          />
        </a>
        <a
          href="https://twitter.com/arjungarg07"
          target="_blank"
          rel="noreferrer"
          className="ml-3 text-gray-500"
        >
          <svg
            fill="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            className="w-8 h-8"
            viewBox="0 0 24 24"
          >
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
          </svg>
        </a>
        <a
          href="https://www.linkedin.com/in/arjungarg17/"
          target="_blank"
          rel="noreferrer"
          className="ml-3 text-gray-500"
        >
          <svg
            fill="currentColor"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="0"
            className="w-8 h-8"
            viewBox="0 0 24 24"
          >
            <path
              stroke="none"
              d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
            ></path>
            <circle cx="4" cy="4" r="2" stroke="none"></circle>
          </svg>
        </a>
      </span>
    </div>
  </footer>
);

export default Footer;

import React, { useContext, useState } from "react";
import { MdOutlineLightMode, MdOutlineNightlight } from "react-icons/md";
import { FaLink, FaGithub } from "react-icons/fa";
import SocialLink from "../SocialLink";
import { ThemeContext } from "../../context/Theme";

export default function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className=" flex flex-col gap-3">
      <div className="flex w-full justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="bg-gradient-to-r from-primary to-secondary rounded-full p-[0.3rem]">
            <img
              src="/avatar.png"
              alt="avatar"
              className="rounded-full w-16 h-16 ring-2 ring-light dark:ring-dark"
            />
          </div>
          <div>
            <h1 className="tracking-wider">Filip</h1>
            <h2 className="text-xl tracking-wider">Front-End Developer</h2>
          </div>
        </div>
        <div>
          <button
            className="text-2xl"
            onClick={() => {
              toggleTheme();
            }}
          >
            {theme === "light" ? (
              <MdOutlineNightlight />
            ) : (
              <MdOutlineLightMode />
            )}
          </button>
        </div>
      </div>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu, mauris,
        semper feugiat pellentesque velit aliquam. Egestas ut pellentesque in ut
        cras praesent. Mus ultrices at amet enim, scelerisque.{" "}
      </p>

      <div className="flex gap-3">
        <SocialLink
          icon={<FaLink className="fill-dark" />}
          title="Portfolio"
          url="https://filipivanovic.netlify.app"
        />
        <SocialLink
          icon={<FaGithub className="fill-dark" />}
          title="GitHub"
          url="https://github.com/alkanoidev"
        />
      </div>
    </div>
  );
}

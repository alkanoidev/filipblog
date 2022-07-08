import React from "react";

type Props = {
  icon: JSX.Element;
  title: string;
  url: string;
};

export default function SocialLink({ icon, title, url }: Props) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="flex items-center gap-2 group"
    >
      <div
        className="bg-gradient-to-tl p-2 rounded-lg text-xl from-primary 
      to-secondary text-dark shadow-lg transition-all duration-300 ease-out group-hover:scale-[1.2] 
      group-hover:rounded-[10px] group-hover:shadow-cyan-600/40"
      >
        {icon}
      </div>
      {title}
    </a>
  );
}

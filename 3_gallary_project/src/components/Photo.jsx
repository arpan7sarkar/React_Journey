import React from "react";

const Photo = ({ e }) => {
  return (
    <div>
      <a href={e.url} target="_blank">
        <div className="rounded-xl overflow-hidden">
          <img
            src={e.download_url}
            alt=""
            className="object-cover w-77 h-70 overflow-auto"
          />
          <div className="font-bold text-2xl">{e.author}</div>
        </div>
      </a>
    </div>
  );
};

export default Photo;

import React from "react";
import { Link } from "react-router-dom";

function Gallery({ data }) {
  return (
    <div className="gallery">
      {Object.entries(data).map((el, i) => (
        <div key={i} className="card">
          <Link
            to={{
              pathname: `/gallery/${el[0]}`,
              state: el[1],
            }}
          >
            <h1>Album #{el[0]}</h1>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Gallery;

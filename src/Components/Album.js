import React from "react";
import { useLocation } from "react-router-dom";

function Album({ getFavorite }) {
  const location = useLocation();
  return (
    <div className="album">
      {location.state.map((el, i) => (
        <div
          key={location.state[i].id}
          onClick={() =>
            getFavorite(location.state[i].id, location.state[i].albumId)
          }
          className="thumbnail"
        >
          <img alt="alternative" src={el.thumbnailUrl} />
          <p>{el.title}</p>
        </div>
      ))}
    </div>
  );
}

export default Album;

import React from "react";
import { useDispatch } from "react-redux";
import { addFavorite } from "../reduxToolkit/sliceFavorites";
import { useLocation } from "react-router-dom";

function Album() {
  const location = useLocation();
  const dispatch = useDispatch();
  return (
    <div className="album">
      {location.state.map((el, i) => (
        <div
          key={location.state[i].id}
          onClick={() => dispatch(addFavorite(location.state[i]))}
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

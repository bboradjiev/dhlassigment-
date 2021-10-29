import React from "react";
import { removeFavorite } from "../reduxToolkit/sliceFavorites";

import { useSelector, useDispatch } from "react-redux";

function Favorites() {
  const { favorites } = useSelector((state) => state.favorites);
  const dispatch = useDispatch();

  return (
    <div className="favorites">
      {favorites.map((el, i) => (
        <div key={i} className="favorite_card">
          <img alt="alternative" src={el.thumbnailUrl} />
          <button
            onClick={() => {
              dispatch(removeFavorite(el.id));
            }}
          >
            Delete
          </button>
          <p>{el.title}</p>
        </div>
      ))}
    </div>
  );
}

export default Favorites;

import React from "react";

function Favorites({ favorites, removeFavorite }) {
  return (
    <div className="favorites">
      {favorites.map((el, i) => (
        <div key={i} className="favorite_card">
          <img alt="alternative" src={el.thumbnailUrl} />
          <button
            onClick={() => removeFavorite(favorites[i].id, favorites[i].id)}
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

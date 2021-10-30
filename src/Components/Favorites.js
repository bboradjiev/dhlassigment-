import React from "react";
import { removeFavorite } from "../reduxToolkit/sliceFavorites";
import { Card, Button } from "react-bootstrap";

import { useSelector, useDispatch } from "react-redux";

function Favorites() {
  const { favorites } = useSelector((state) => state.favorites);
  const dispatch = useDispatch();

  return (
    <div className="favorites">
      {favorites.map((el, i) => (
        <Card style={{ width: "330px", height: "600px" }} key={favorites.id}>
          <Card.Img variant="top" src={el.thumbnailUrl} />
          <Card.Body className="card-body d-flex flex-column justify-content-between">
            <Card.Title>Card Title</Card.Title>
            <Card.Text>{el.title}</Card.Text>
            <Button
              variant="primary"
              onClick={() => dispatch(removeFavorite(el.id))}
            >
              Remove from favorites
            </Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default Favorites;

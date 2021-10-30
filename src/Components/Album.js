import React from "react";
import { useDispatch } from "react-redux";
import { addFavorite } from "../reduxToolkit/sliceFavorites";
import { useLocation } from "react-router-dom";
import { Card, Button } from "react-bootstrap";

function Album() {
  const location = useLocation();
  const dispatch = useDispatch();
  return (
    <div className="album">
      {location.state.map((el, i) => (
        <Card
          style={{ width: "330px", height: "600px" }}
          key={location.state[i].id}
        >
          <Card.Img variant="top" src={el.thumbnailUrl} />
          <Card.Body className="card-body d-flex flex-column justify-content-between">
            <Card.Title>Card Title</Card.Title>
            <Card.Text>{el.title}</Card.Text>
            <Button
              variant="primary"
              onClick={() => dispatch(addFavorite(location.state[i]))}
            >
              Add to faforites
            </Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default Album;

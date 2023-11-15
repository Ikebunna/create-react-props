// import required components, styles and libraries
import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import "./Player.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShirt } from "@fortawesome/free-solid-svg-icons";

const Player = (props) => {
  // setting default props
  Player.defaultProps = {
    id: Math.random(),
    name: "Super Star",
    team: "Mars IX",
    nationality: "Unknown",
    jerseyNumber: "00",
    age: 0,
    imageURL: "https://www.placeholder.com/150",
  };

  // Player card prop
  return (
    <Card className="player--card">
      <Card.Img variant="top" src={props.imageURL} />
      <Card.ImgOverlay className="d-flex">
        <FontAwesomeIcon
          icon={faShirt}
          style={{ color: "rgb(41, 30, 105)" }}
          className="fa--jersey"
        />
        <Card.ImgOverlay className="">
          <div className="fs-3 fw-bolder jersey--no ms-2">
            {props.jerseyNumber}
          </div>
        </Card.ImgOverlay>
      </Card.ImgOverlay>
      <Card.Body>
        <Card.Title className="fw-bold">{props.name}</Card.Title>
      </Card.Body>

      <ListGroup className="list-group-flush bg-primary fst-italic fw-normal">
        <ListGroup.Item>{props.team}</ListGroup.Item>
        <ListGroup.Item>{props.nationality}</ListGroup.Item>
        <ListGroup.Item>Age: {props.age}</ListGroup.Item>
      </ListGroup>
    </Card>
  );
};

// export player component
export default Player;

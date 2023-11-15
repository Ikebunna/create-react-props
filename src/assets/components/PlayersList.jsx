import React from "react";
import { players } from "../../players";
import Player from "./Player";
import { Row, Col, Container } from "react-bootstrap";

// rendering of player component from player list component
const PlayersList = () => {
  return (
    <Container>
      <Row xs={1} md={2} lg={3} className="g-4">
        {players.map((item) => (
          <Col key={item.id}>
            <Player {...item} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default PlayersList;

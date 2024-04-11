import React from "react";
import { Container, Row } from "react-bootstrap";
import useFetch from "../hooks/useFetch";
import Loading from "./Loading";
import CardData from "./CardData";
import "./topairing.css";

const TopAiring = () => {
  const results = useFetch("top-airing");

  return (
    <div className="custom-container">
      <hr className="mx-5 mt-5 hrs" />
      <Container className="d-flex justify-content-center">
        <h3 className="heading">Top airing</h3>
      </Container>
      <hr className="mx-5 hrs" />
      {results == undefined && <Loading />}
      <Row xs={2} sm={3} md={4} lg={5} xl={6} className="g-3">
        {results?.results.map((obj) => (
          <CardData key={obj.id} anime={obj} isRecent={false} />
        ))}
      </Row>
    </div>
  );
};

export default TopAiring;

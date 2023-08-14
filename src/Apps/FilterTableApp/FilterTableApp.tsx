import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import FilterContainer from "./component/Filter";
import TableComponent from "./component/Table";

function App() {
  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <FilterContainer />
          <TableComponent />
        </Col>
      </Row>
    </Container>
  );
}

export default App;

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Typeahead } from "react-bootstrap-typeahead";
import { Container, Row, Col, Button } from "react-bootstrap";
import { fetchUsers } from "../redux/userSlice";

const FilterContainer: React.FC = () => {
  const [selectedName, setSelectedName] = useState<string | null>(null);
  const [selectedUsername, setSelectedUsername] = useState<string | null>(null);
  const [selectedEmail, setSelectedEmail] = useState<string | null>(null);
  const dispatch = useDispatch();

  const handleSearch = () => {
    dispatch(
      fetchUsers({
        name: selectedName || "",
        username: selectedUsername || "",
        email: selectedEmail || "",
      })
    );
  };

  return (
    <Container>
      <Row className="mb-3">
        <Col>
          <Typeahead
            id="name"
            labelKey="name"
            options={[]} // Replace with your data source
            placeholder="Filter by Name"
            selected={selectedName ? [{ name: selectedName }] : []}
            onChange={(selected) => setSelectedName(selected[0]?.name || null)}
          />
        </Col>
        <Col>
          <Typeahead
            id="username"
            labelKey="username"
            options={[]} // Replace with your data source
            placeholder="Filter by Username"
            selected={selectedUsername ? [{ username: selectedUsername }] : []}
            onChange={(selected) =>
              setSelectedUsername(selected[0]?.username || null)
            }
          />
        </Col>
        <Col>
          <Typeahead
            id="email"
            labelKey="email"
            options={[]} // Replace with your data source
            placeholder="Filter by Email"
            selected={selectedEmail ? [{ email: selectedEmail }] : []}
            onChange={(selected) =>
              setSelectedEmail(selected[0]?.email || null)
            }
          />
        </Col>
        <Col>
          <Button onClick={handleSearch}>Search</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default FilterContainer;

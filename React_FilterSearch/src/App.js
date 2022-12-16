import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { data } from "./data.js";

export default function App() {
  const [search, setSearch] = useState("");

  return (
    <div className="App">
      <Container>
        <h1 className="text-center mt-4">Contact Keeper</h1>
        <Form>
          <InputGroup className="my-3">
            <Form.Control
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              placeholder="Search Contacts"
            />
          </InputGroup>
        </Form>

        <Table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>

          {data
            .filter((item) => {
              return search.toLowerCase() === ""
                ? item
                : item.first_name.toLowerCase().includes(search);
            })
            .map((item) => (
              <tbody>
                <tr key={item.id}>
                  <th>{item.first_name}</th>
                  <th>{item.last_name}</th>
                  <th>{item.email}</th>
                  <th>{item.phone}</th>
                </tr>
              </tbody>
            ))}
        </Table>
      </Container>
    </div>
  );
}

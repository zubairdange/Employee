import React from "react";
import { Button, Dropdown } from "react-bootstrap";
import { MyCard } from "./MyCard";
import { MyForm } from "./MyForm";
import { MyAlert } from "./MyAlert";
import { MyNavbar } from "./MyNavbar";
import { MyTable } from "./MyTable";

export const Home = () => {
  return (
    <div>
      <h1 style={{ color: "blue" }}>Welcome to My Home</h1>
      <p1> we are here to learn React Js</p1>
      <Button variant="success">click me</Button>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Dropdown Button
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <MyNavbar />
      <br></br>
      <MyTable />
      <MyForm />
      <MyCard />

      <MyAlert />
    </div>
  );
};

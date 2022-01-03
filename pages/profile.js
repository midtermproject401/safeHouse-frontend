import React, { useContext } from "react";
import Card from "react-bootstrap/Card";
import { LoginContext } from "../context/loginContext";

export default function profile() {
  const { user } = useContext(LoginContext);
  const userName = user.username;

  return (
    <div className="cardDiv">
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://blog.cpanel.com/wp-content/uploads/2019/08/user-01.png"
          style={{ width: "18rem" }}
        />
        <Card.Body>
          <Card.Title>username: {userName}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

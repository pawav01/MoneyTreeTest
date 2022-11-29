import React, { useEffect, useContext, useState } from "react";
import Card from "react-bootstrap/Card";
import NavigationBar from "./NavigationBar";
import { Row, ListGroup } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { Bar, Doughnut } from "react-chartjs-2";
import { getUserData } from "../api/UserApi";
// eslint-disable-next-line
import { Chart as ChartJS } from "chart.js/auto";
import { UserContext } from "../contexts/UserContext";

const Dashboard = () => {
  const { user, setUser } = useContext(UserContext)
  useEffect(() => {
    const getData = async () => {
      const user = await getUserData();
      setUser(user);
      console.log(user);
    }
    getData();
  }, []);

  const doughnutData = {
    labels: ["Food", "Travel", "Household", "Shopping", "Healthcare", "Misc"],
    datasets: [
      {
        label: "Expenses",
        data: [12, 19, 3, 5, 7, 4],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(75, 192, 192, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(75, 192, 192, 1)",
        ],
        borderWidth: 1,
        cutout: "90%",
        circumference: 180,
        rotation: 270,
      },
    ],
  };

  const barData = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        data: [12, 19, 3, 5, 2, 3, 10, 12, 19, 3, 5, 2],
      },
    ],
  };

  if (user == null) {
    return <div>Loading...</div>;
  }
  
  return (
    <div>
      <NavigationBar />
      <Row>
        <Card
          style={{
            marginTop: "10rem",
            marginLeft: "4rem",
            width: "15%",
            height: "20%",
            alignItems: "center",
            fontSize: "150%",
          }}
        >
          <Card.Body>
            <Card.Title>Month - November 2022</Card.Title>
            <Card.Text className="mb-2">Income</Card.Text>
            <Card.Text className="mb-2 text-success">$80000</Card.Text>
            <Card.Text className="mb-2">Expense</Card.Text>
            <Card.Text className="mb-2 text-danger">$3100</Card.Text>
          </Card.Body>
        </Card>
        <Card
          style={{
            marginTop: "10rem",
            marginLeft: "2rem",
            width: "35%",
            height: "30%",
            alignItems: "left",
            fontSize: "120%",
          }}
        >
          <Card.Body>
            <Card.Title>Categories</Card.Title>
            <Table
              responsive
              striped
              style={{ fontSize: "90%", marginTop: "1em" }}
            >
              <thead style={{ alignItems: "center" }}>
                <tr>
                  <th>Food</th>
                  <th>Travel</th>
                  <th>Household</th>
                  <th>Shopping</th>
                  <th>Healthcare</th>
                  <th>Misc</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>$300</td>
                  <td>$200</td>
                  <td>$100</td>
                  <td>$100</td>
                  <td>$100</td>
                  <td>$100</td>
                </tr>
              </tbody>
            </Table>
          </Card.Body>
        </Card>
        <Card
          style={{
            marginTop: "10rem",
            marginLeft: "2rem",
            marginRight: "2rem",
            width: "37%",
            height: "20%",
            alignItems: "left",
            fontSize: "120%",
          }}
        >
          <Card.Body>
            <Card.Title>Categories</Card.Title>
            <Doughnut data={doughnutData} options={{ aspectRatio: 2 }} />
          </Card.Body>
        </Card>
      </Row>
      <Row>
        <Card
          style={{
            marginTop: "2rem",
            marginLeft: "4rem",
            width: "55%",
            height: "20%",
            alignItems: "left",
            fontSize: "50%",
          }}
        >
          <Card.Body>
            <Card.Title>Year - 2022</Card.Title>
            <Bar data={barData} height={400} width={600} />
          </Card.Body>
        </Card>
        <Card
          style={{
            marginTop: "2rem",
            marginLeft: "2rem",
            marginRight: "2rem",
            width: "35%",
            height: "37rem",
            alignItems: "left",
            fontSize: "50%",
          }}
        >
          <Card.Title
            style={{
              marginTop: "2rem",
              marginLeft: "2rem",
            }}
          >
            Recent Activity
          </Card.Title>
          <Card.Body style={{ overflowY: "scroll" }}>
            <ListGroup variant="flush" style={{ fontSize: "250%" }}>
              <ListGroup.Item variant="success">Income $500</ListGroup.Item>
              <ListGroup.Item variant="danger">Travel $20</ListGroup.Item>
              <ListGroup.Item variant="success">Income $500</ListGroup.Item>
              <ListGroup.Item variant="danger">Travel $20</ListGroup.Item>
              <ListGroup.Item variant="success">Income $500</ListGroup.Item>
              <ListGroup.Item variant="danger">Travel $20</ListGroup.Item>
              <ListGroup.Item variant="success">Income $500</ListGroup.Item>
              <ListGroup.Item variant="danger">Travel $20</ListGroup.Item>
              <ListGroup.Item variant="success">Income $500</ListGroup.Item>
              <ListGroup.Item variant="danger">Travel $20</ListGroup.Item>
              <ListGroup.Item variant="success">Income $500</ListGroup.Item>
              <ListGroup.Item variant="danger">Travel $20</ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Card>
      </Row>
    </div>
  );
  
};

export default Dashboard;

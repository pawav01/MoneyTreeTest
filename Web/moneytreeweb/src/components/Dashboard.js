import React, { useEffect, useContext, useState } from "react";
import Card from "react-bootstrap/Card";
import { Row, ListGroup, Dropdown, Col, Spinner } from "react-bootstrap";
// import Table from "react-bootstrap/Table";
import { Bar } from "react-chartjs-2";
import { getUserData } from "../api/UserApi";
// eslint-disable-next-line
import { Chart as ChartJS } from "chart.js/auto";
import { UserContext } from "../contexts/UserContext";

const Dashboard = () => {
  const { user, setUser } = useContext(UserContext);
  const [toggleYear, setToggleYear] = useState(2022);
  const [toggleMonth, setToggleMonth] = useState(10);

  useEffect(() => {
    const getData = async () => {
      const user = await getUserData();
      setUser(user);
    };
    getData();
    // eslint-disable-next-line
  }, []);

  let expenseData = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  let incomeData = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  let years = [];

  if (user) {
    for (let i = 0; i < user.categories.length; i++) {
      let getTimeStamp = user.categories[i].CreatedAt;
      let date = new Date(getTimeStamp);
      let month = date.getMonth();
      let year = date.getFullYear();

      if (!years.includes(year)) {
        years.push(year);
      }

      if (user.categories[i].Type === 2) {
        expenseData[month] = user.categories[i].Budget;
      }
      if (user.categories[i].Type === 1) {
        incomeData[month] = user.categories[i].Budget;
      }
    }
  }

  const months = [
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
  ];

  // const monthnumbers = months.map((month) => {
  //   return months.indexOf(month);
  // });

  function setYearValue(y) {
    setToggleYear(y);
  }

  function setMonthValue(m) {
    setToggleMonth(m);
  }

  function getIncome() {
    for (let i = 0; i < user.categories.length; i++) {
      let getTimeStamp = user.categories[i].CreatedAt;
      let date = new Date(getTimeStamp);
      let month = date.getMonth();
      let year = date.getFullYear();
      if (
        user.categories[i].Type === 1 &&
        // eslint-disable-next-line
        year == toggleYear &&
        // eslint-disable-next-line
        month == toggleMonth
      ) {
        return user.categories[i].Budget;
      } else return 0;
    }
  }
  function getExpenses() {
    let total = 0;
    for (let i = 0; i < user.categories.length; i++) {
      let getTimeStamp = user.categories[i].CreatedAt;
      let date = new Date(getTimeStamp);
      let month = date.getMonth();
      let year = date.getFullYear();
      if (
        user.categories[i].Type === 2 &&
        // eslint-disable-next-line
        year == toggleYear &&
        // eslint-disable-next-line
        month == toggleMonth
      ) {
        return total + user.categories[i].Budget;
      } else return 0;
    }
  }

  const expense = {
    label: "Expenses",
    data: expenseData,
    backgroundColor: "rgba(255, 99, 132, 0.4)",
    borderColor: "rgba(255, 99, 132, 1)",
    borderWidth: 1,
  };

  const income = {
    label: "Income",
    data: incomeData,
    backgroundColor: "rgba(75, 192, 192, 0.4)",
    borderColor: "rgba(75, 192, 192, 1)",
    borderWidth: 1,
  };

  const barData = {
    labels: months,
    datasets: [expense, income],
  };

  if (user == null) {
    return <Spinner animation="border" role="status" style={{
      marginTop: "10%",
      marginLeft: "5%",
    }}>
      <span className="visually-hidden">Loading...</span>
    </Spinner>;
  }

  return (
    <div>
      <Row
        style={{
          marginTop: "10%",
          marginLeft: "5%",
        }}
      >
        <Col>
          <h1>Welcome {user.UserName ? user.UserName : "Guest"}!</h1>{" "}
        </Col>
        <Col></Col>
        <Col>
          <Row>
            <Dropdown onSelect={setYearValue}>
              <Dropdown.Toggle className="dropdown" id="dropdown-basic">
                Choose Year
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {years.map((year) => (
                  <Dropdown.Item eventKey={year}>{year}</Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
            <h3 style={{ marginLeft: "5%" }}> {toggleYear} </h3>
            <Dropdown style={{ marginLeft: "5%" }} onSelect={setMonthValue}>
              <Dropdown.Toggle className="dropdown">
                Choose Month
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {months.map((month) => (
                  <Dropdown.Item eventKey={months.indexOf(month)}>
                    {month}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
            <h3 style={{ marginLeft: "5%" }}> {Number(toggleMonth) + 1} </h3>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col className="toprow">
          <Card style={{ alignItems: "center" }}>
            <Card.Body>
              <Card.Title
                className="mb-2 text-success"
                style={{ fontSize: "80%" }}
              >
                Income
              </Card.Title>
              <Card.Text className="mb-2 text-success">
                ${getIncome()}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col
          className="toprow"
          style={{
            marginRight: "5%",
          }}
        >
          <Card style={{ alignItems: "center" }}>
            <Card.Body>
              <Card.Title
                className="mb-2 text-danger"
                style={{ fontSize: "80%" }}
              >
                Expense
              </Card.Title>
              <Card.Text className="mb-2 text-danger">
                ${getExpenses()}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col className="bottomrow">
          <Card>
            <Card.Body>
              <Card.Title>Year {toggleYear}</Card.Title>
              <Bar data={barData} height={400} width={600} />
            </Card.Body>
          </Card>
        </Col>
        <Col
          className="bottomrow"
          style={{
            marginRight: "5%",
          }}
        >
          <Card>
            <Card.Title
              style={{
                marginTop: "5%",
                marginLeft: "5%",
                fontSize: "450%",
              }}
            >
              Recent Activity
            </Card.Title>
            <Card.Body style={{ overflowY: "scroll" }}>
              <ListGroup variant="flush" style={{ fontSize: "250%" }}>
                {user.transactions.map((transaction) => (
                  <ListGroup.Item variant="success">
                    <Col> {transaction.Name} </Col>
                    <Col> ${transaction.Amount}</Col>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;

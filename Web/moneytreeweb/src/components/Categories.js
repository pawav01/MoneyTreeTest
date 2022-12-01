import React, { useEffect, useContext, useState } from "react";
import Card from "react-bootstrap/Card";
import { Row, Dropdown, Col, Form, Button } from "react-bootstrap";

import Table from "react-bootstrap/Table";
import { Doughnut } from "react-chartjs-2";
import { getUserData } from "../api/UserApi";
// eslint-disable-next-line
import { Chart as ChartJS } from "chart.js/auto";
import { UserContext } from "../contexts/UserContext";

const Categories = () => {
  const { user, setUser } = useContext(UserContext);
  const [toggleYear, setToggleYear] = useState(2022);
  const [toggleMonth, setToggleMonth] = useState(10);

  useEffect(() => {
    const getData = async () => {
      const user = await getUserData();
      setUser(user);
      console.log(user);
    };
    getData();
    // eslint-disable-next-line
  }, []);

  let years = [];
  let categories_data = {};
  let budget = {};

  if (user) {
    console.log(user.UserName);
    for (let i = 0; i < user.categories.length; i++) {
      let getTimeStamp = user.categories[i].CreatedAt;
      let date = new Date(getTimeStamp);
      let month = date.getMonth();
      let year = date.getFullYear();

      if (!years.includes(year)) {
        years.push(year);
      }

      for (let j = 0; j < user.transactions.length; j++) {
        if (user.transactions[j].CategoryId === user.categories[i].Id) {
          if (categories_data.hasOwnProperty(user.categories[i].Name)) {
            categories_data[user.categories[i].Name] +=
              user.transactions[j].Amount;
          } else {
            categories_data[user.categories[i].Name] =
              user.transactions[j].Amount;
          }
        }
      }
    }
    console.log(categories_data);
    for (let i = 0; i < user.categories.length; i++) {
      //   if (budget.hasOwnProperty(user.categories[i].Name)) {
      //     budget[user.categories[i].Name] += user.categories[i].Budget;
      //   } else {
      budget[user.categories[i].Name] = user.categories[i].Budget;
      //   }
    }
  }
  console.log(budget);

  const categorynames = Object.keys(categories_data);
  const categoryvalues = Object.values(categories_data);
  const budgetvalues = Object.values(budget);

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

  function setYearValue(y) {
    setToggleYear(y);
  }

  function setMonthValue(m) {
    setToggleMonth(m);
  }
  //   console.log(typeof toggleMonth);

  const doughnutData = {
    labels: categorynames,
    datasets: [
      {
        data: categoryvalues,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
        ],
        borderWidth: 1,
        cutout: "90%",
        circumference: 180,
        rotation: 270,
      },
    ],
  };

  return (
    <>
      <Row
        style={{
          marginTop: "10%",
          marginLeft: "5%",
        }}
      >
        <Col>
          <h1>Welcome {user ? user.UserName : "Guest"}!</h1>{" "}
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

      {/* 2nd row  */}
      <Row>
        <Col>
          <Row>
            <Col className="toprow">
              <Card>
                <Card.Body>
                  <Card.Title className="mb-2" style={{ fontSize: "60%" }}>
                    Expenses by Category for {Number(toggleMonth) + 1}/
                    {toggleYear}
                  </Card.Title>
                  <Doughnut
                    data={doughnutData}
                    options={{ aspectRatio: 2 }}
                    style={{ height: "10%" }}
                  />
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col className="bottomrow">
              <Card>
                <Card.Body>
                  <Card.Title style={{ fontSize: "400%" }}>
                    Budget for {Number(toggleMonth) + 1}/{toggleYear}{" "}
                  </Card.Title>
                  <Table
                    responsive
                    striped
                    style={{ fontSize: "220%", marginTop: "1%" }}
                  >
                    <thead style={{ alignItems: "center" }}>
                      <tr>
                        {categorynames.map((category) => (
                          <th>{category}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        {budgetvalues.map((value) => (
                          <td>{value}</td>
                        ))}
                      </tr>
                    </tbody>
                  </Table>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>

        <Col style={{ marginRight: "2%" }}>
          <Row>
            <Col className="bottomrow">
              <Card>
                <Card.Body>
                  <Card.Title style={{ fontSize: "400%" }}>
                    Add Categories
                  </Card.Title>
                  <Form>
                    <Form.Group className="mb-3" controlId="formCategoryName">
                      <Form.Label style={{ fontSize: "300%" }}>
                        Category Name
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter Category Name"
                        style={{ width: "75%", boxShadow: "none" }}
                      />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBudget">
                      <Form.Label style={{ fontSize: "300%" }}>
                        Budget
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter Budget"
                        style={{ width: "75%", boxShadow: "none" }}
                      />
                    </Form.Group>
                    <Button type="submit">Submit</Button>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default Categories;

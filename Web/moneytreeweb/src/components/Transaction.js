import React, { useEffect, useContext, useState } from "react";
import { Row, Dropdown, Col, Form, Button, Spinner, Modal, Table } from "react-bootstrap";
import { UserContext } from "../contexts/UserContext";
import { DataSimplifier } from "../services/DataModifier";
import { createTransaction, deleteTreansaction, getUserData } from "../api/UserApi";

const Transaction = () => {
    const { user, setUser } = useContext(UserContext);
    const [pageLoaded, setPageLoaded] = useState(false);
    const [toggleYear, setToggleYear] = useState(null);
    const [toggleMonth, setToggleMonth] = useState(null);
    const [formTransactionName, setTransactionName] = useState(null);
    const [formTransactionDate, setFormTransactionDate] = useState(null);
    const [formTransactionAmount, setFormTransactionAmount] = useState(null);
    const [formTransactionCategory, setFormTransactionCategory] = useState(null);
    const [formTransactionAccount, setFormTransactionAccount] = useState(null);
    const [simplifiedData, setSimplifiedData] = useState(null);
    const [transactionDisplay, setTransactionDisplay] = useState(null);
    const [addTransaction, setAddTransaction] = useState(false);
    const [deleteId, setDeleteId] = useState(null);
    const [yearList, setYearList] = useState(null);


    const handleClose = () => { setAddTransaction(false); setTransactionName(null); setFormTransactionDate(null); setFormTransactionAmount(null); setFormTransactionCategory(null); setFormTransactionAccount(null) };
    const handleShow = () => setAddTransaction(true);
    const deleteClose = () => { setDeleteId(null) };

    const submitForm = async () => {
        const formData = {
            name: formTransactionName,
            transactionDate: new Date(formTransactionDate).toISOString(),
            categoryId: formTransactionCategory,
            amount: formTransactionAmount,
            accountId: formTransactionAccount,
        }
        setPageLoaded(false);
        const response = await createTransaction(formData);
        handleClose();
    }

    const deleteTra = async () => {
        const response = await deleteTreansaction(deleteId.id);
        setDeleteId(null);
        setPageLoaded(false);
    }

    function loadTransactionTableData(year, month) {
        var res = (simplifiedData ?? []).filter(item => checkFilter(year, month, item));
        setTransactionDisplay(res);
    }

    function checkFilter(yearFilter, monthFilter, item) {
        var year = new Date(item.transactionDate).getUTCFullYear();
        var month = new Date(item.transactionDate).getUTCMonth();
        return (yearFilter == null ? true : year == yearFilter) && (monthFilter == null ? true : month == monthFilter)
    }

    function setYearValue(y) {
        setToggleYear(y);
        loadTransactionTableData(y, toggleMonth);
    }

    function setMonthValue(m) {
        setToggleMonth(months.indexOf(m));
        loadTransactionTableData(toggleYear, months.indexOf(m));
    }

    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    useEffect(() => {
        const getData = async () => {
            const user = await getUserData();
            let res = DataSimplifier(user.Id, user.accounts, user.categories, user.transactions);
            let years = res.map(item => new Date(item.transactionDate).getFullYear());
            years = [... new Set(years)];
            setUser(user);
            setSimplifiedData(res);
            setTransactionDisplay(res);
            setYearList(years)
            setPageLoaded(true);
        };
        getData();
    }, [pageLoaded]);

    if (pageLoaded == false) {
        return <Spinner animation="border" role="status" style={{
            marginTop: "10%",
            marginLeft: "5%",
        }}>
            <span className="visually-hidden">Loading...</span>
        </Spinner>;
    }

    return (
        <>
            <Row
                style={{
                    marginTop: "10%",
                    marginLeft: "5%",
                }}
            >
                <Dropdown onSelect={setYearValue}>
                    <Dropdown.Toggle className="dropdown" id="dropdown-basic">
                        {toggleYear ?? "Choose Year"}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        {yearList.map((year) => (
                            <Dropdown.Item eventKey={year}>{year}</Dropdown.Item>
                        ))}
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown onSelect={setMonthValue}>
                    <Dropdown.Toggle className="dropdown">
                        {toggleMonth == null ? "Choose Month" : months[toggleMonth]}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        {months.map((month) => (
                            <Dropdown.Item eventKey={month}>
                                {month}
                            </Dropdown.Item>
                        ))}
                    </Dropdown.Menu>
                </Dropdown>
                <Col>
                    <Button onClick={handleShow}>
                        Add Transaction
                    </Button>

                    <Modal show={addTransaction} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Create A New Transaction</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form>
                                <Form.Group className="mb-3">
                                    <Form.Label>Transaction Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter transaction name" id="categoryName" onChange={e => setTransactionName(e.target.value)} />
                                    <Form.Select id="categoryType" onChange={e => setFormTransactionAccount(e.target.value)}>
                                        <option>Account Name</option>
                                        {user.accounts.map(item => (
                                            <option value={item.Id}>{item.Name}</option>
                                        ))
                                        }
                                    </Form.Select>
                                    <Form.Select id="categoryType" onChange={e => setFormTransactionCategory(e.target.value)}>
                                        <option>Category Name</option>
                                        {user.categories.map(item => (
                                            <option value={item.Id}>{item.Name}</option>
                                        ))
                                        }
                                    </Form.Select>
                                    <Form.Control type="text" placeholder="Transaction Amount" id="categoryName" onChange={e => setFormTransactionAmount(e.target.value)} />
                                    <Form.Control type="date" placeholder="Transaction Date" onChange={e => setFormTransactionDate(e.target.value)} />
                                </Form.Group>
                            </Form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button variant="primary" onClick={submitForm}>
                                Save Changes
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </Col>
            </Row>
            {transactionDisplay && <Row style={{
                marginTop: "1%",
                marginLeft: "5%",
                width: "90%"
            }}>
                <Table responsive striped bordered>
                    <thead>
                        <tr>
                            <th>Transaction Name</th>
                            <th>Transaction Date</th>
                            <th>Amount</th>
                            <th>Category</th>
                            <th>Account</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {transactionDisplay.map(item => (
                            <tr>
                                <td>{item.transactionName}</td>
                                <td>{item.transactionDate.split("T")[0]}</td>
                                <td style={{ color: item.categoryType === 1 ? "rgba(50,205,50)" : "red" }}>$ {item.transactionAmount}</td>
                                <td>{item.categoryName}</td>
                                <td>{item.accountName}</td>
                                <td><Button variant="danger" value={item.transactionName} id={item.transactionId} onClick={e => setDeleteId({ name: e.target.value, id: e.target.id })}>Delete</Button></td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
                {deleteId && <Modal show={deleteId} onHide={deleteClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Confirm Delete</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Are you sure you want to delete the transaction : {deleteId.name} ?
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={deleteClose}>
                            Cancel
                        </Button>
                        <Button variant="danger" onClick={deleteTra}>
                            Confirm
                        </Button>
                    </Modal.Footer>
                </Modal>
                }
            </Row>
            }
        </>
    )

}

export default Transaction;
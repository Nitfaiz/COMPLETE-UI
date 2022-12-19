import React from 'react'
import { FcBusinessman, FcFrame, FcBusinessContact, FcTreeStructure, FcViewDetails, FcSms, FcPositiveDynamic, FcAutomatic ,FcLightAtTheEndOfTunnel} from "react-icons/fc"
import { Link } from "react-router-dom";
import { Col } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import { MdChat } from "react-icons/md"
import { Form } from 'react-bootstrap';
import { RxDotFilled } from "react-icons/rx"
import { FiUserPlus } from "react-icons/fi"
import { FaWaveSquare} from "react-icons/fa"
import { MdEmail } from 'react-icons/md';
import { FaMediumM } from "react-icons/fa"
import { GoHome } from "react-icons/go"
import { MdOutlineContactSupport } from "react-icons/md"
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from 'react-bootstrap'
import { BsBell, BsFileSpreadsheetFill } from "react-icons/bs"
import Dropdown from 'react-bootstrap/Dropdown';

function Tickets() {
    document.title = 'Tickets'
    return (

        <div className='super-box' style={{ backgroundColor: "lightgray", height: "100vh", display: "flex" }}>

            <div className='left-beta' style={{ backgroundColor: "rgb(24, 50, 71)", height: "100vh", width: "68px" }}>


                <ul className="new-nav" style={{ color: "white", marginLeft: "-1vw", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", marginTop: "10vh", position: "fixed" }}>


                    <Link to={{ pathname: '/dashboard/default' }}><li data-placement="right" title="Dashboard" data-toggle="tooltip" className="my-lv" style={{ marginTop: "0vh" }}><FcBusinessman style={{ fontSize: "28px" }} /></li></Link>


                    <Link to={{ pathname: '/dashboard/tickets' }}> <li data-placement="right" title="Tickets" data-toggle="tooltip" style={{ marginTop: "6vh" }}><FcFrame style={{ fontSize: "28px" }} /></li></Link>

                    <Link to={{ pathname: '/contact' }}><li data-placement="right" title="Contact" data-toggle="tooltip" style={{ marginTop: "6vh" }}><FcBusinessContact style={{ fontSize: "28px" }} /></li></Link>

                    <Link to={{ pathname: '/dashboard/companies' }}><li data-placement="right" title="Companies" data-toggle="tooltip" style={{ marginTop: "6vh" }}><FcLightAtTheEndOfTunnel style={{ fontSize: "28px" }} /></li></Link>

                    <Link to={{ pathname: '/socialsupport' }}> <li data-placement="right" title="Social" data-toggle="tooltip" style={{ marginTop: "6vh" }}><FcTreeStructure style={{ fontSize: "28px" }} /></li> </Link>

                    <Link to={{ pathname: '/solutions' }}> <li data-placement="right" title="Solutions" data-toggle="tooltip" style={{ marginTop: "6vh" }}><FcViewDetails style={{ fontSize: "28px" }} /></li></Link>

                    <Link to={{ pathname: '/fourms' }}> <li data-placement="right" title="Fourms" data-toggle="tooltip" style={{ marginTop: "6vh" }}><FcSms style={{ fontSize: "28px" }} /></li></Link>

                    <Link to={{ pathname: '/analytics' }}><li data-placement="right" title="Analytics" data-toggle="tooltip" style={{ marginTop: "6vh" }}><FcPositiveDynamic style={{ fontSize: "28px" }} /></li> </Link>

                    <Link to={{ pathname: '/setting' }}><li data-placement="right" title="Admin" data-toggle="tooltip" style={{ marginTop: "6vh" }}><FcAutomatic style={{ fontSize: "28px" }} /></li></Link>
                </ul>
            </div>

            <div className='right-beta' style={{ backgroundColor: "lightgray", height: "100vh", width: "95vw" }}>


                <Navbar sticky="top" collapseOnSelect expand="lg" variant="light" style={{ backgroundColor: "hsla(155, 83%, 24%, 1)", height: "70px" }}>

                <Navbar.Brand href="#home" style={{ marginLeft: "1vw", color: "white" }}><h6 style={{ fontSize: "15px" }}>All Tickets</h6></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">

                        <Nav className="me-auto" style={{ marginLeft: "10vw" }}>&nbsp;
                            <Nav.Link href="#features"><span style={{ color: "orange" }}>your trial ends in 21 days</span></Nav.Link>

                            <Link to={{ pathname: '/recomandedfeatures' }}><Button variant='light' className='recom' style={{ marginLeft: "16px", marginRight: "2px" }}>Recommended features
                            </Button> </Link>

                            <Link to={{ pathname: '/getstarted' }}><Button variant='light' className='get-started-respo' style={{ marginRight: "2px", marginLeft: "20px" }}>Get started</Button></Link>

                            <Dropdown >
                                <Dropdown.Toggle className='new-respo' variant="light" id="dropdown-basic" style={{ marginLeft: "16px" }} >New
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>

                            <div className='header-right d-flex align-items-center ' >

                                <input type="search" placeholder=' &nbsp;search' className='search-input' />
                                &nbsp;
                                &nbsp;

                                <BsBell style={{ fontSize: "23px", color: "white" }} />
                                &nbsp;
                                &nbsp;
                                <MdOutlineContactSupport style={{ fontSize: "26px", color: "white" }} />
                                &nbsp;
                                &nbsp;
                                <BsFileSpreadsheetFill style={{ fontSize: "21px", color: "white" }} />
                                &nbsp;
                                &nbsp;
                                <GoHome style={{ fontSize: "23px", color: "white" }} />
                                &nbsp;
                                &nbsp;
                                <FaMediumM style={{ fontSize: "23px", color: "white" }} />
                                &nbsp;
                            </div>
                        </Nav>

                    </Navbar.Collapse>

                </Navbar>

                <div style={{ height: "65px", backgroundColor: "white" }}> &nbsp;
                    < Form.Check type="checkbox" style={{ marginLeft: "8px" }} label="Sort by : Date created" />
                </div>

                <div className="main-div-card " style={{ marginRight: "5vw" }}>
                    <div style={{ width: "74.9vw", marginLeft: "5.5vw", marginTop: "4vh" }}>
                        <Row className="col-md-12">

                            <Col className="col-md-9" style={{ backgroundColor: "white", display: "flex", justifyContent: "start", alignItems: "center" }}>
                                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" />
                                </Form.Group>
                                <FcBusinessman style={{ fontSize: "48px" }} />

                                <div style={{ paddingLeft: "16px", marginTop: "12px" }}> <h6 style={{ width: "72px", backgroundColor: "#ffecf0", color: "#c82124", border: "1px solid #ffd0d6", fontSize: "13px" }}>&nbsp; Overdue &nbsp; </h6>

                                    <p>Recieved a broken TV #3</p>

                                    <p><MdEmail /> Sarah James  Created: 6 days ago  Overdue by: 3 days</p>


                                </div>

                            </Col>


                            <Col className="col-md-3" style={{ backgroundColor: "white" }}>

                                <p><RxDotFilled />  Low</p>
                                <p style={{ lineHeight: "2px" }}> <FiUserPlus /> &nbsp;Escalation</p>
                                <p> <FaWaveSquare /> &nbsp;Open</p>



                            </Col>

                        </Row>


                    </div>


                    <div style={{ width: "74.9vw", marginLeft: "5.5vw", marginTop: "2vh" }}>
                        <Row className="col-md-12">

                            <Col className="col-md-9" style={{ backgroundColor: "white", display: "flex", justifyContent: "start", alignItems: "center" }}>
                                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" />
                                </Form.Group>
                                <FcBusinessman style={{ fontSize: "48px" }} />

                                <div style={{ paddingLeft: "16px", marginTop: "12px" }}> <h6 style={{ width: "72px", backgroundColor: "#ffecf0", color: "#c82124", border: "1px solid #ffd0d6", fontSize: "13px" }}>&nbsp; Overdue &nbsp; </h6>
                                    <p>Recieved a broken TV #3</p>
                                    <p><MdEmail /> Sarah James  Created: 6 days ago  Overdue by: 3 days</p>
                                </div>
                            </Col>

                            <Col className="col-md-3" style={{ backgroundColor: "white" }}>

                                <p><RxDotFilled />  Low</p>
                                <p style={{ lineHeight: "2px" }}> <FiUserPlus /> &nbsp;Escalation</p>
                                <p> <FaWaveSquare /> &nbsp;Open</p>
                            </Col>
                        </Row>
                    </div>

                    <div style={{ width: "74.9vw", marginLeft: "5.5vw", marginTop: "2vh" }}>
                        <Row className="col-md-12">

                            <Col className="col-md-9" style={{ backgroundColor: "white", display: "flex", justifyContent: "start", alignItems: "center" }}>
                                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" />
                                </Form.Group>
                                <FcBusinessman style={{ fontSize: "48px" }} />

                                <div style={{ paddingLeft: "16px", marginTop: "12px" }}> <h6 style={{ width: "72px", backgroundColor: "#ffecf0", color: "#c82124", border: "1px solid #ffd0d6", fontSize: "13px" }}>&nbsp; Overdue &nbsp; </h6>
                                    <p>Recieved a broken TV #3</p>
                                    <p><MdEmail /> Sarah James  Created: 6 days ago  Overdue by: 3 days</p>
                                </div>
                            </Col>

                            <Col className="col-md-3" style={{ backgroundColor: "white" }}>

                                <p><RxDotFilled />  Low</p>
                                <p style={{ lineHeight: "2px" }}> <FiUserPlus /> &nbsp;Escalation</p>
                                <p> <FaWaveSquare /> &nbsp;Open</p>
                            </Col>
                        </Row>
                    </div>
                </div>

                <div className="h-button"> <MdChat style={{ fontSize: "24px" }} /> </div>

            </div>

        </div>
    )
}

export default Tickets;
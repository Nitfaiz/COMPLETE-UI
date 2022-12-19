import React from 'react'
import { FcBusinessman, FcFrame, FcBusinessContact, FcTreeStructure, FcViewDetails, FcSms, FcPositiveDynamic, FcAutomatic,FcLightAtTheEndOfTunnel } from "react-icons/fc"
import { Link } from "react-router-dom";
import { Col } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Dropdown from 'react-bootstrap/Dropdown';
import { FcClock } from "react-icons/fc"
import Card from 'react-bootstrap/Card';
import { MdChat } from "react-icons/md"
import { FaMediumM} from "react-icons/fa"
import { GoHome } from "react-icons/go"
import { MdOutlineContactSupport } from "react-icons/md"
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from 'react-bootstrap'
import { BsBell, BsFileSpreadsheetFill } from "react-icons/bs"


function DefaultDashboard() {
    document.title = 'Defaut Dashboard'
    return (

        <div className='super-box' style={{ backgroundColor: "lightgray", height: "170vh", display: "flex" }}>

            <div className='left-beta' style={{ backgroundColor: "rgb(24, 50, 71)", height: "170vh", width: "68px" }}>


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

            <div className='right-beta' style={{ backgroundColor: "lightgray", height: "170vh", width: "95vw", }}>

                <Navbar sticky="top" collapseOnSelect expand="lg" variant="light" style={{ backgroundColor: "hsla(155, 83%, 24%, 1)", height: "70px" }}>

                    <Navbar.Brand href="#home" style={{ marginLeft: "1vw", color: "white" }}><h6 style={{ fontSize: "15px" }}>My Dashboard</h6></Navbar.Brand>
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

                <div className='all-group' >

                    <Dropdown style={{ display: "flex", justifyContent: "space-between" }}>
                        <Dropdown.Toggle id="dropdown-button-dark-example1" style={{ marginTop: "6px" }} variant="light">
                            All groups
                        </Dropdown.Toggle>



                        <Dropdown.Menu variant="light" >
                            <Dropdown.Item href="#/action-1" active>
                                All groups
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Billing</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Customer  Support</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Escalations</Dropdown.Item>

                        </Dropdown.Menu>
                        <Link style={{ marginTop: "6px" }}>Recent activities  </Link>
                    </Dropdown>

                </div>

                <div style={{ backgroundColor: "blue", borderRadius: "10px", height: '10vh', margin: "2vh", display: "flex", justifyContent: "start", alignItems: "center" }}>

                    <div> <FcClock style={{ fontSize: "39px", color: "black", marginLeft: "1vw" }} /> </div>

                    <div>
                        <h6 style={{ color: "white" }}>Check out these recommended features to get the most out of your trial.
                        </h6>
                    </div>
                    {/* <Link  to={{pathname: '/recomandedfeatures'}}><Button variant='light' className='recom' style={{marginTop:"6px"}}>Recommended features
                       </Button> </Link> */}
                </div>

                <div className='main-all-card' style={{ width: "95%", margin: "1vw", marginLeft: "1vw" }}>


                    <Row className='col-md-12' style={{ marginLeft: "1vw" }} >

                        <Col className='col-md-2 col-12 my-2' id="hello-Row" >

                            <Card>
                                <Card.Body>
                                    <Card.Title>Unresolved </Card.Title>
                                    <Card.Text>
                                        <h4>3</h4>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>


                        <Col className='col-md-2 col-12 my-2' id="hello-Row" >

                            <Card>
                                <Card.Body>
                                    <Card.Title>Unassigned </Card.Title>
                                    <Card.Text>
                                        <h4>0</h4>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>



                        <Col className='col-md-2 col-12 my-2' id="hello-Row" >

                            <Card>
                                <Card.Body>
                                    <Card.Title>Due today </Card.Title>
                                    <Card.Text>
                                        <h4>1</h4>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col className='col-md-2 col-12 my-2' id="hello-Row" >

                            <Card>
                                <Card.Body>
                                    <Card.Title>Open </Card.Title>
                                    <Card.Text>
                                        <h4>3</h4>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col className='col-md-2 col-12 my-2' id="hello-Row" >

                            <Card>
                                <Card.Body>
                                    <Card.Title>On hold </Card.Title>
                                    <Card.Text>
                                        <h4>0</h4>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col className='col-md-2 col-12 my-2' id="hello-Row"  >

                            <Card>
                                <Card.Body>
                                    <Card.Title>Over due </Card.Title>
                                    <Card.Text>
                                        <h4>3</h4>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>



                    </Row>



                </div>

                <div style={{ backgroundColor: "white", height: "50vh", margin: "2vh" }}>
                    &nbsp;
                    <h6 style={{ marginLeft: "2vw", marginTop: "2vh" }}>Today's trends</h6>
                    <p style={{ marginLeft: "2vw" }}>as of 12th Dec 2022, 10:21 AM</p>

                </div>

                <div style={{ marginLeft: "2vh" }}>
                    <Row className='col-md-12' style={{ width: "100%" }}  >

                        <Col className='col-md-6 col-12 my-2'>
                            <Card >
                                <Card.Body>
                                    <Card.Title>Unresolved tickets</Card.Title>
                                    <Card.Subtitle style={{ fontSize: "12px" }} className="mb-2 text-muted">Across helpdesk</Card.Subtitle>
                                    <Card.Text>
                                        <pre>Group              open</pre>
                                        <hr></hr>
                                        <pre>Group              open</pre>
                                        <hr></hr>
                                        <pre>hey                open
                                        </pre>
                                        <hr></hr>
                                        <pre>0                  done</pre>


                                    </Card.Text>
                                </Card.Body>
                            </Card>

                        </Col>

                        <Col className='col-md-6 col-12 my-2'>
                            <Card >
                                <Card.Body>
                                    <Card.Title>Customer satisfaction</Card.Title>
                                    <Card.Subtitle style={{ fontSize: "12px" }} className="mb-2 text-muted">Across helpdesk this month</Card.Subtitle>
                                    <Card.Text>
                                        <pre>Group              open</pre>
                                        <hr></hr>
                                        <pre>Group              open</pre>
                                        <hr></hr>
                                        <pre>hey                open
                                        </pre>
                                        <hr></hr>
                                        <pre>0                  done</pre>



                                    </Card.Text>
                                </Card.Body>
                            </Card>

                        </Col>

                        {/* { <Col className='col-md-6 col-12 my-2'>
                        <Card >
                           <Card.Body>
                                <Card.Title>Unresolved tickets</Card.Title>
                                  <Card.Subtitle style={{ fontSize: "12px" }}  className="mb-2 text-muted">Across helpdesk</Card.Subtitle>
                                    <Card.Text>
                                        <pre> Group              open</pre>
                                        <hr></hr>

                                        <pre> Escalation          3</pre>
                                        <hr></hr>
                                        <pre>
                                            hey                  ok
                                        </pre>
                                        <hr></hr>
                                        <pre> 0                  done</pre>


                            </Card.Text> 
                            </Card.Body>
                             </Card>

                        </Col> }

                        <Col className='col-md-6 col-12 my2'>
                        <Card >
                           <Card.Body>
                                <Card.Title>Unresolved tickets</Card.Title>
                                  <Card.Subtitle style={{ fontSize: "12px" }}  className="mb-2 text-muted">Across helpdesk</Card.Subtitle>
                                    <Card.Text>
                                        <pre> Group              open</pre>
                                        <hr></hr>

                                        <pre> Escalation          3</pre>
                                        <hr></hr>
                                        <pre>
                                            hey                  ok
                                        </pre>
                                        <hr></hr>
                                        <pre> 0                  done</pre>


                            </Card.Text> 
                            </Card.Body>
                             </Card>

                        </Col>   */}
                    </Row>
                </div>

                <div className="h-button"> <MdChat style={{ fontSize: "24px" }} /> </div>

            </div>

        </div>
    )
}

export default DefaultDashboard;
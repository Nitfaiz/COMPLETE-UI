import React from 'react'
import NavBar from "./NavBar"
import { FcBusinessman, FcFrame, FcBusinessContact, FcTreeStructure, FcViewDetails, FcSms, FcPositiveDynamic, FcAutomatic ,FcLightAtTheEndOfTunnel} from "react-icons/fc"
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import { Col } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import {MdChat} from "react-icons/md"


function FormySelf() {
    document.title = 'Recommended features'

  return (

    <div className='super-box' style={{ backgroundColor: "lightgray", height: "100vh", width: "100vw",display:"flex" }}>

      <div className='left-beta' style={{ backgroundColor: "rgb(24, 50, 71)", height:"150vh",width:"68px" }}> 
      

              <ul className="new-nav" style={{ color: "white", marginLeft: "-1vw", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", marginTop: "10vh", position: "fixed" }}>


          <Link  to={{pathname: '/dashboard/default'}}><li data-placement="right" title="Dashboard" data-toggle="tooltip" className="my-lv" style={{ marginTop: "0vh" }}><FcBusinessman style={{ fontSize: "28px" }} /></li></Link>


          <Link  to={{pathname: '/dashboard/tickets'}}> <li data-placement="right" title="Tickets" data-toggle="tooltip" style={{ marginTop: "6vh" }}><FcFrame style={{ fontSize: "28px" }} /></li></Link>

          <Link  to={{pathname: '/contact'}}><li data-placement="right" title="Contact" data-toggle="tooltip" style={{ marginTop: "6vh" }}><FcBusinessContact style={{ fontSize: "28px" }} /></li></Link>

          <Link to={{ pathname: '/dashboard/companies' }}><li data-placement="right" title="Companies" data-toggle="tooltip" style={{ marginTop: "6vh" }}><FcLightAtTheEndOfTunnel style={{ fontSize: "28px" }} /></li></Link>

          <Link  to={{pathname: '/socialsupport'}}> <li data-placement="right" title="Social" data-toggle="tooltip" style={{ marginTop: "6vh" }}><FcTreeStructure style={{ fontSize: "28px" }} /></li> </Link>

          <Link  to={{pathname: '/solutions'}}> <li data-placement="right" title="Solutions" data-toggle="tooltip" style={{ marginTop: "6vh" }}><FcViewDetails style={{ fontSize: "28px" }} /></li></Link>

          <Link  to={{pathname: '/fourms'}}> <li data-placement="right" title="Fourms" data-toggle="tooltip" style={{ marginTop: "6vh" }}><FcSms style={{ fontSize: "28px" }} /></li></Link>

          <Link  to={{pathname: '/analytics'}}><li data-placement="right" title="Analytics" data-toggle="tooltip" style={{ marginTop: "6vh" }}><FcPositiveDynamic style={{ fontSize: "28px" }} /></li> </Link>

          <Link  to={{pathname: '/setting'}}><li data-placement="right" title="Admin" data-toggle="tooltip" style={{ marginTop: "6vh" }}><FcAutomatic style={{ fontSize: "28px" }} /></li></Link>

              </ul>
      </div>

      <div className='right-beta' style={{ backgroundColor: "lightgray",height:"150vh",width:"95vw"}}>  <NavBar/> 


                    <div style={{marginTop: "5vh" }}>

                        <Row className="col-md-12 " style={{ margin: "0.5vw", marginTop: "2vh"  }}>

                            <Col className="col-md-4 col-12" id="one-card" style={{ marginTop: "2vh" }} >

                                <Card>
                                    <Card.Img variant="top" src="https://indfassetsgreen.freshdesk.com/production/a/assets/images/recommended-features/customer-fields-dcbc7a1c8114feeee338de6dfa39035779ba0927f0a10a5c56433b19f6160ec9.svg" />
                                    <Card.Body>
                                        <Card.Title style={{fontSize:"14px",color:"green",backgroundColor:"lightcyan",borderRadius:"8px",display:"inline",opacity:"0.8"}}> &nbsp; Resolve faster&nbsp;</Card.Title>
                                        <Card.Title>Customer Fields</Card.Title>

                                        <Card.Text style={{color:"black"}}>
                                        Capture customer information and history to give agents context and customers a break from repeating themselves
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col className="col-md-4 col-12" id="one-card" style={{ marginTop: "2vh" }} >
                            <Card >
                                    <Card.Img variant="top" src="https://indfassetsgreen.freshdesk.com/production/a/assets/images/recommended-features/business-hours-dcbc7a1c8114feeee338de6dfa39035779ba0927f0a10a5c56433b19f6160ec9.svg" />
                                    <Card.Body>

                                    <Card.Title style={{fontSize:"14px",color:"black",backgroundColor:"lightgray",borderRadius:"8px",display:"inline",opacity:"0.8"}}> &nbsp; Handle more tickets &nbsp;</Card.Title>
                                        <Card.Title>Business Hours</Card.Title>
                                        <Card.Text style={{color:"black"}}>
                                        Define working hours and holidays to set expectations with customers
                                        Define working hours and  
                                       
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>

                            <Col className="col-md-4 col-12" id="one-card" style={{ marginTop: "2vh" }} >
                            <Card >
                                    <Card.Img variant="top" src="https://indfassetsgreen.freshdesk.com/production/a/assets/images/recommended-features/ticket-fields-dcbc7a1c8114feeee338de6dfa39035779ba0927f0a10a5c56433b19f6160ec9.svg" />
                                    <Card.Body>
                                        <Card.Title style={{fontSize:"14px",color:"green",backgroundColor:"lightcyan",borderRadius:"8px",display:"inline",opacity:"0.8"}}> &nbsp; Resolve  faster &nbsp; </Card.Title>
                                        <Card.Title>Ticket Fields </Card.Title>
                                        <Card.Text style={{color:"black"}}>
                                        Customize your ticket type to categorize, prioritize, and route tickets efficiently.
                                        prioritize, and route tickets efficiently.
                                       
                                        
                                      
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>


                            <Col className="col-md-4 col-12" id="one-card" style={{ marginTop: "2vh" }} >
                            <Card >
                                    <Card.Img variant="top" src="https://indfassetsgreen.freshdesk.com/production/a/assets/images/recommended-features/email-notifications-dcbc7a1c8114feeee338de6dfa39035779ba0927f0a10a5c56433b19f6160ec9.svg" />
                                    <Card.Body>
                                    <Card.Title style={{fontSize:"14px",color:"green",backgroundColor:"lightcyan",borderRadius:"8px",display:"inline",opacity:"0.8"}}> &nbsp; Resolve  faster &nbsp; </Card.Title>
                                        <Card.Title>Email Notifications</Card.Title>
                                        <Card.Text style={{color:"black"}}>
                                        Keep agents and customers apprised on updates to new and older tickets.
                                        Keep agents and customers 
                                        
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col className="col-md-4 col-12" id="one-card" style={{ marginTop: "2vh" }} >
                            <Card >
                                    <Card.Img variant="top" src="https://indfassetsgreen.freshdesk.com/production/a/assets/images/recommended-features/automations-dcbc7a1c8114feeee338de6dfa39035779ba0927f0a10a5c56433b19f6160ec9.svg" />
                                    <Card.Body>
                                    <Card.Title style={{fontSize:"14px",color:"black",backgroundColor:"lightgray",borderRadius:"8px",display:"inline",opacity:"0.8"}}> &nbsp; Handle more tickets &nbsp;</Card.Title>
                                        <Card.Title>Automations</Card.Title>
                                        <Card.Text style={{color:"black"}}>
                                        Eliminate repetitive tasks such as categorization and routing by creating
                                        Keep agents 
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>




                            <Col className="col-md-4 col-12" id="one-card" style={{ marginTop: "2vh" }} >
                            <Card >
                                    <Card.Img variant="top" src="https://indfassetsgreen.freshdesk.com/production/a/assets/images/recommended-features/canned-responses-dcbc7a1c8114feeee338de6dfa39035779ba0927f0a10a5c56433b19f6160ec9.svg" />
                                    <Card.Body>
                                        <Card.Title style={{fontSize:"14px",color:"blue",backgroundColor:"lightcyan",borderRadius:"8px",display:"inline",opacity:"0.8"}}> &nbsp; Repond  faster &nbsp; </Card.Title>
                                        <Card.Title>Canned Responses</Card.Title>
                                        <Card.Text style={{color:"black"}}>
                                        Pre-create replies to quickly insert them in responses to customers
                                        Keep agents and customers 
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </div>

                 







                    <div className="h-button"> <MdChat style={{ fontSize: "24px" }} /> </div>


       </div>

    </div>
  )
}

export default FormySelf;
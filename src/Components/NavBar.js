import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from 'react-bootstrap'
import { BsBell, BsFileSpreadsheetFill } from "react-icons/bs"
import { FaMediumM, FaUnity } from "react-icons/fa"
import { GoHome } from "react-icons/go"
import Dropdown from 'react-bootstrap/Dropdown';
import { MdOutlineContactSupport } from "react-icons/md"
import { Link } from 'react-router-dom';

function CollapsibleExample() {
  const hellBoro = ()=>{
    alert();
  }

  return (

    <Navbar className='main-nav' sticky="top" collapseOnSelect expand="lg" variant="light" style={{ backgroundColor: "hsla(155, 83%, 24%, 1)", height: "70px"}}>

      <Navbar.Brand href="#home" style={{ marginLeft: "1vw", color: "white" }}> <FaUnity style={{fontSize:"29px"}}/> &nbsp;Dashboard</Navbar.Brand>
      <Navbar.Toggle onClick={hellBoro} aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">

        <Nav className="me-auto" style={{ marginLeft: "10vw" }}>&nbsp;
          <Nav.Link href="#features"><span style={{ color: "orange" }}>your trial ends in 21 days</span></Nav.Link>

          <Link to={{ pathname: '/recomandedfeatures' }}><Button style={{marginLeft:"8vw"}} variant='light' >RecommendedFeatures 
          </Button> </Link>

          <Link to={{ pathname: '/getstarted' }}><Button variant='light' style={{ marginRight: "2px", marginLeft: "20px" }}>GetStarted</Button></Link>

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
  );
}

export default CollapsibleExample;
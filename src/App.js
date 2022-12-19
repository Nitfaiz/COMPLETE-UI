import { Route, Routes } from "react-router-dom";
import './App.css';
import Firstpage from './Components/Firstpage';
import Secondpage from './Components/Secondpage';
import Thirdpage from "./Components/Thirdpage";
import Getstarted from "./Components/Getstarted";
import Dashboard from "./Components/Dashboard";
import Newmodal from "./Components/Newmodal";
import Newdashboard from "./Components/Newdashboard";
import ReactSideBar from "./Components/ReactSideBar";
import NavBar from "./Components/NavBar";
import DefaultDashboard from "./Components/DefaultDashboard";
import Recomamendent from "./Components/Recomamendent";
import Tickets from "./Components/Tickets";
import DemoCompo from "./Components/DemoCompo";
import SocialSupport from "./Components/SocialSupport";
import Solutions from "./Components/Solutions";
import Contact from "./Components/Contact";
import FormySelf from "./Components/FormySelf"
import Fourms from "./Components/Fourms";
import Analytics from "./Components/Analytics";
import Admin from "./Components/Admin";
import Companies from "./Components/Companies";



function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Firstpage />} />
        <Route path='/Secondpage' element={<Secondpage />} />
        <Route path='/thirdpage' element={<Thirdpage />} />
        <Route path='/getstarted' element={<Getstarted />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/newmodal' element={<Newmodal />} />
        <Route path='/newdashboard' element={<Newdashboard />} />
        <Route path='/sidebar' element={<ReactSideBar />} />
        <Route path='/navbar' element={<NavBar />} />
        <Route path='/dashboard/default' element={<DefaultDashboard />} />
        <Route path='/recomandedfeatures' element={<Recomamendent />} />
        <Route path='/dashboard/tickets' element={<Tickets />} />
        <Route path='/demo' element={<DemoCompo />} />
        <Route path='/socialsupport' element={<SocialSupport />} />
        <Route path='/solutions' element={<Solutions />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/myself' element={<FormySelf />} />
        <Route path='/fourms' element={<Fourms />} />
        <Route path='/analytics' element={<Analytics />} />
        <Route path='/setting' element={<Admin />} />
        <Route path='/dashboard/companies' element={<Companies />} />












        recomandedfeatures

      </Routes>
    </>
  );
}

export default App;

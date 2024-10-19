
import './App.css';
// import Demo from './components/Demo';
import Login from './components/Login';
// import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Contact from './components/Contact';
import Home from './components/Home';
import Signup from './components/Signup';
import VendorLogin from './components/VendorLogin';
import VendorSignup from './components/VendorSignup';
import VendorHome from './components/Vendor_Home';
// import Architecture from './components/services/Archiecture';
import About from './components/About';
// import Footer from './components/Footer';
import Admin from './components/Admin';
import UserAccount from './components/UserAccount';
import { UserProvider } from './components/UserContext';
import { VendorProvider } from './components/VendorContext';
import Water from './components/waterengi/Water';

import ServiceDetails from './components/servicedetails/ServiceDetails';

import Services from './components/services/Services';
import Gpt from './components/room-gpt/Gpt';

function App() {

  // const[login,setLogin]=useState(false);

  return (
    <div className="App">
      
      {/* <Routes>
        <Route path='/' element={<Demo/>} />
      </Routes> */}
      <UserProvider>
        <VendorProvider>     
<Routes>
        <Route path='/login' element={<Login/>} />
        <Route path='/' element={<Home/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/vendors' element={<VendorSignup/>} />
        <Route path='/vendorl' element={<VendorLogin/>} />
        <Route path='/vendorhome/*' element={<VendorHome/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/gpt' element={<Gpt/>}/>
        <Route path='/about' element={<About/>} />
        <Route path='/account/*' element={<UserAccount/>}/>
        <Route path='/water' element={<Water/>}/>
        <Route path="/admin/*" element={<Admin/>}/>
       {/* <Route path="/concrete/*" element={<Concrete/>}/>
       <Route path="/carpentry" element={<Carpentry/>}/>
       <Route path="/electrical" element={<Electrical/>}/>
       <Route path="/excavation" element={<Excavation/>}/>
       <Route path="/foundation" element={<Foundation/>}/>
       <Route path="/grouting" element={<Grouting/>}/>
       <Route path="/painting" element={<Painting/>}/>
       <Route path="/interior" element={<InteriorDesign/>}/>
       <Route path="/pipeline" element={<PipeLine/>}/>
       <Route path="/plumbing" element={<Plumbing/>}/>
       <Route path="/roofing" element={<Roofing/>}/> */}
       {/* <Route path="/concrete/*" element={<Concrete/>}/> */}
       {/* <Route path="/renovation" element={<Renovation/>}/> */}

       <Route path="/services/*" element={<Services/>}/>
       <Route path="/service_details" element={<ServiceDetails/>}/>
       {/* <Route path="/service_details" element={<ServiceDetails/>}/> */}

       {/* <Link 
    to={`/interior?serviceType=Interior`}
    className="text-decoration-none"> 
  */}
      </Routes>
      </VendorProvider>

      </UserProvider>

      {/* <Login/> */}
{/* <Footer/> */}
      {/* <Contact/> */}
    </div>
  );
}

export default App;

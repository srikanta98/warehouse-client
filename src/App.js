import './App.css';
import Navbar from './Pages/Shared/Navbar';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home/Home';
// import About from './Pages/About/About';
import Login from './Pages/Login/Login';
// import Appointment from './Pages/Appointment/Appointment';
import SignUp from './Pages/Login/SignUp';
import RequireAuth from './Pages/Login/RequireAuth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyAppointments from './Pages/Dashboard/MyAppointments';
import MyReview from './Pages/Dashboard/MyReview';
import MyHistory from './Pages/Dashboard/MyHistory';
import Users from './Pages/Dashboard/Users';
import AddDoctor from './Pages/Dashboard/AddDoctor';
import RequireAdmin from './Pages/Login/RequireAdmin';
import ManageDoctors from './Pages/Dashboard/ManageDoctors';
import Payment from './Pages/Dashboard/Payment';
import Servicedetail from './Pages/Home/Detail/Servicedetail';
import My from './Pages/Shared/My';
import Blogs from './Pages/Shared/Blogs';

function App() {
  return (
    //max-w-7xl mx-auto px-12
    <div className=''>
      <Navbar ></Navbar>
      <Routes>
        <Route path="/about" element={

          <My></My>

        } />
        <Route path="/blog" element={

          <Blogs></Blogs>

        } />
        <Route path="/" element={

          <Home></Home>

        } />
        <Route path="/home" element={<Home />} />
        {/* <Route path="about" element={<About />} /> */}
        {/* <Route path="appointment" element={
          <RequireAuth>
            <Appointment />
          </RequireAuth>
        } /> */}
        <Route path="/" element={<Home />} />
        <Route path='/inventory/:inventoryId' element={
          <RequireAuth>
            <Servicedetail></Servicedetail>
          </RequireAuth>
        }></Route>
        <Route path="dashboard" element={<RequireAuth><Dashboard /></RequireAuth>} >
          <Route index element={<MyAppointments></MyAppointments>}></Route>
          <Route path="review" element={<MyReview></MyReview>}></Route>
          <Route path="history" element={<MyHistory></MyHistory>}></Route>
          {/* <Route path="payment/:id" element={<Payment></Payment>}></Route> */}
          <Route path="users" element={<RequireAdmin><Users></Users></RequireAdmin>}></Route>
          <Route path="addDoctor" element={<RequireAdmin><AddDoctor></AddDoctor></RequireAdmin>}></Route>
          <Route path="manageDoctor" element={<RequireAdmin><ManageDoctors></ManageDoctors></RequireAdmin>}></Route>
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;

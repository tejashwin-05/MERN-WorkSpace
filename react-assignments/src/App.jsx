import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import EmpTable from './components/assignment-1/EmpTable';
import Design from './components/assignment-2.1/Design';
import Products from './components/assignment-2.2/Products';
import Header from './components/assignment-2.3.2/Header';
import Profiles from './components/assignment-2.3.2/Profiles';
import Footer from './components/assignment-2.3/Footer';
import Navbar from './components/assignment-2.3/Navbar';
import UserList from './components/assignment-2.3/UserList';
import ArrayState from './components/assignment-3.1/ArrayState';
import EffectWork from './components/assignment-3.2/EffectWork';
import RegisForm from './components/assignment-4.1/RegisForm';
import AddUser from './components/assignment-4.2/AddUser';
import Userlist from './components/assignment-4.2/Userlist';
import Users from './components/assignment-5.1/Users';
import Child from './components/assignment-5.2/Child';
import Parent from './components/assignment-5.3/Parent';
import RootLayout from './components/assignment-6/RootLayout';
import Home from './components/assignment-6/Home';
import Register from './components/assignment-6/Register';
import Login from './components/assignment-6/Login';
import Technologies from './components/assignment-6/Technologies';
import RouteErr from './components/assignment-6/RouteErr';
import UserProfile from './components/assignment-6/UserProfile';
import ManageTasks from './components/assignment-9/ManageTasks';



function App(){

  const createBrowserObj = createBrowserRouter([
    {
      path : "",
      element: <RootLayout />,
      errorElement:<RouteErr />,
      children : [
        {
          path : '',
          element:<Home />
        },
        {
          path : "register",
          element : <Register />
        },
        {
          path : "login",
          element : <Login />
        },
        {
          path : "user-profile",
          element : <UserProfile />
        },
        {
          path : "technologies",
          element : <Technologies />
        }
      ]
    }
  ])

  return(
    <div>
      {/* <RouterProvider router={createBrowserObj} /> */}
      {/* <EmpTable /> */}
      {/* <Design /> */}
      {/* <Products /> */}
      {/* <div>
        <Navbar />
        <UserList />
        <Footer />
      </div> */}
      {/* <div>
        <Header />
        <Profiles />
      </div> */}
      {/* <ArrayState /> */}
      {/* <EffectWork /> */}
      {/* <RegisForm /> */}
      {/* <div>
        <AddUser />
      </div> */}
      {/* <Users /> */}
      {/* <Child /> */}
      {/* <Parent /> */}
      
      <ManageTasks />
    </div>
  )
}
export default App;
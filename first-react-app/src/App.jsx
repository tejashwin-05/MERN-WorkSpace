import './App.css'
import EffectDemo from './components/EffectDemo';
import EffectDemo2 from './components/EffectDemo2';
import Eventdemo from './components/Eventdemo';
import First from './components/first/First';
import FormDemo from './components/FormDemo';
import ManageTasks from './components/ManageTasks';
import Parent from './components/Parent';
import Products from './components/Products';
import Second from './components/second/Second';
import StateChangeDemo from './components/StateChangeDemo';
import {createBrowserRouter,Navigate,RouterProvider} from 'react-router-dom'
import RootLayout from './components/RootLayout'
import Home from './components/Home'
import Register from './components/Register'
import Login from './components/Login'
import Technologies from './components/Technologies';
import RouteErrors from './components/RouteErrors';
import Assign1 from './components/assignments/assignment-1/Assign1';
import Assign2one from './components/assignments/assignment-2/Assign2one';
import UserProfile from './components/UserProfile';
import Java from './components/Java';
import Node from './components/Node';
//import Vue from './components/Vue';
import { lazy,Suspense } from 'react';

//dynamic import
const Vue = lazy(()=>import('./components/Vue'))

function App(){

  const browserRouterObj=createBrowserRouter([
    {
      path:"",
      element: <RootLayout />,
      errorElement:<RouteErrors />,
      children:[
        {
          path:'',
          element:<Home />
        },
        {
          path:"register",
          element:<Register />
        },
        {
          path:"login",
          element:<Login />
        },
        {
          path:"user-profile",
          element:<UserProfile />
        },
        {
          path:"technologies",
          element:<Technologies />,
          children:[
            {
              path:"java",
              element:<Java />
            },
            {
              path:"nodejs",
              element:<Node />
            },
            {
              path:"vue",
              element:<Suspense fallback='loading....'><Vue /></Suspense>
            },
            {
              path:'',
              element:<Navigate to='java' />
            }
          ]
        }
      ]
      
    }
  ])

  //business logic
  //return react element
  return(
     <div>
         {/* <RouterProvider router={browserRouterObj}/> */}
         {/*connect First component  */}
         {/* <First/> */}
         {/* <Second/> */}
         {/* nest Products component */}
         {/* <Products/> */}
         {/* nest Event demo Component */}
         {/* <Eventdemo /> */}
         {/* nest state change demo */}
         {/* <StateChangeDemo /> */}
         {/*  */}
         {/* <EffectDemo /> */}
         {/* <EffectDemo2/> */}
          {/* <FormDemo /> */}
         {/* nest parent component */}
         {/* <Parent /> */}
         <ManageTasks />
            {/* <Assign1 /> */}
            
        
     </div>
    // <RouterProvider router={browserRouterObj}/>

    
  );
}

export default App;
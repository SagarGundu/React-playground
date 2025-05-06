import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body"; 
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";




const Resturantcard =(props) =>{
  const{resData}= props;
  const{cloudinaryImageId,name,cuisines,avgRating}=resData?.info;
  return(
    <div className="res-card">
      <img 
      className="res-logo"
      alt="res-logo"
      src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_366/"+
      cloudinaryImageId}/>
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4> {resData.info.sla.deliveryTime} mins </h4>

 </div>
  );
};


const Applayout = () => {
  return(
    <div className= "App">
    <Header/>
    <Outlet/>
    </div>
  );
};

const appRouter = createBrowserRouter([
{
    path: "/",
    element:<Applayout />,
    children:[
      {
        path: "/",
        element: <Body />,
      },
      {
      path:"/about",
      element: <About />,
    },
    {
     path:"/contact",
     element: <Contact />,
    },
    ],
    errorElement: <Error />,
},

]);


 const root= ReactDOM.createRoot(document.getElementById("root"));
   root.render(<RouterProvider router={appRouter}/> );
 
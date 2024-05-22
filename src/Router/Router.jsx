import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home_Page from "../page/Home_Page/Home_Page";
import About_Page from "../page/About_page/About_Page";
import Blog_Page from "../page/Blog_Page/Blog_Page";
import Contact_Page from "../page/Contact_Page/Contact_Page";
import All_Toy from "../page/All_Toy/All_Toy";
import Single_Toy from "../page/All_Toy/Single_Toy";
import Sign_Up from "../page/Sign_Up_Page/Sign_Up";
import Login from "../page/Login_Page/Login";
import My_Shop from "../page/My_Shop/My_Shop";
import Add_Product from "../page/My_Shop/Add_Product";
import Update_Product from "../page/My_Shop/Update_Product";
import Private_Route from "./Private_Route";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home_Page></Home_Page>
      },
      {
        path: '/about',
        element: <About_Page></About_Page>
      },
      {
        path: '/blog',
        element: <Blog_Page></Blog_Page>
      },
      {
        path: '/contact',
        element: <Contact_Page></Contact_Page>
      },
      {
        path: '/all-toy',
        element: <All_Toy></All_Toy>,
        loader: () => fetch(`https://two-revelation-toyshop-serverside.onrender.com/products`)
      },
      {
        path: '/single-toy/:id',
        element: <Private_Route><Single_Toy></Single_Toy></Private_Route>,
        loader: ({ params }) => fetch(`https://two-revelation-toyshop-serverside.onrender.com/products/${params.id}`)
      },
      {
        path: '/signup',
        element: <Sign_Up></Sign_Up>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/my-shop',
        element: <Private_Route><My_Shop></My_Shop></Private_Route>
      },
      {
        path: '/add-product',
        element: <Private_Route><Add_Product></Add_Product></Private_Route>
      },
      {
        path: '/update-product/:id',
        element: <Private_Route><Update_Product></Update_Product></Private_Route>,
        loader: ({ params }) => fetch(`https://two-revelation-toyshop-serverside.onrender.com/products/${params.id}`)
      },
      // {
      //   path: 'update-product/:id',
      //   element: <Update_Product />,
      //   loader: async ({ params }) => {
      //     const response = await fetch(`https://two-revelation-toyshop-serverside.onrender.com/products/${params.id}`);
      //     if (!response.ok) {
      //       throw new Error('Network response was not ok');
      //     }
      //     return response.json();
      //   },
      // },
    ]
  },

]);
import { Suspense, lazy, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createBrowserRouter, createRoutesFromElements, Outlet, Route, RouterProvider } from "react-router-dom";
import "./App.css";
import Topbar from "./shared/Topbar";
import Navbars from "./shared/Navbars";
import Footer from "./shared/Footer";
import ByDev from "./shared/ByDev";
import { fetchProduct } from "./state/products";
import Loader from "./global/Loader";
import CardCom from "./shared/CardCom";

const LazyHomeSection = lazy(() => import("./global/Home"));
const LazyDetailsSection = lazy(() => import("./global/Details"));
const LazyProdactSection = lazy(() => import("./global/Prodact"));

const App = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.products);
  const isCartOpen = useSelector((state) => state.Card.isCartOpen);

  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);

  useEffect(() => {
    const handleCartStateChange = () => {
      document.documentElement.classList.toggle('cartOpenClass', isCartOpen);
    };

    handleCartStateChange();

    return () => {
      document.documentElement.classList.remove('cartOpenClass');
    };
  }, [isCartOpen]);

  const Layout = () => {
 

    return (
      <>
        {isCartOpen && <CardCom />}
        <div>
          <Topbar />
          <Navbars />
          <Outlet />
          <Footer />
           {loading && <Loader />} 
          <ByDev />
        </div>
      </>
    );
  };

  const routers = createBrowserRouter(
    createRoutesFromElements(
     
      <Route>
        <Route path="/" element={<Layout />}>
          <Route index element={<LazyHomeSection />} />
          <Route
            path="/prodact/:id"
            element={
             
                <LazyDetailsSection />
             
            }
          />
          <Route path="/prodact" element={<LazyProdactSection />} />
        </Route>
        <Route path="*" element="not found" />
      </Route>
         
    )
  );

  return (
    
    <Suspense fallback={<loading />}>
      <RouterProvider router={routers} />
    </Suspense>
    
  );
};

export default App;

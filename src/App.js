import { Suspense, lazy, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import Topbar from "./shared/Topbar";
import Navbars from "./shared/Navbars";
import Footer from "./shared/Footer";
import ByDev from "./shared/ByDev";
import { fetchProduct } from "./state/products";
import Loader from "./global/Loader";
import CardCom from "./shared/CardCom";
import AddSucess from "./shared/AddSucess";
import About from "./global/About";

const LazyHomeSection = lazy(() => import("./global/Home"));
const LazyDetailsSection = lazy(() => import("./global/Details"));
const LazyProdactSection = lazy(() => import("./global/Prodact"));
const LazyAboutSection = lazy(() => import('./global/About'));


const App = () => {

  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.products);
  const isCartOpen = useSelector((state) => state.Card.isCartOpen);
  const { AddAnamation } = useSelector((state) => state.Card);

  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);

  useEffect(() => {
    const handleCartStateChange = () => {
      document.documentElement.classList.toggle("cartOpenClass", isCartOpen);
    };

    handleCartStateChange();

    return () => {
      document.documentElement.classList.remove("cartOpenClass");
    };
  }, [isCartOpen]);


  // console.log(lazyAboutSection)
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
          {AddAnamation && <AddSucess />}
        </div>
      </>
    );
  };

  const routers = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Layout />}>
          <Route index element={<LazyHomeSection />} />
          <Route path="/prodact/:id" element={<LazyDetailsSection />} />
          <Route path="/about" element={<LazyAboutSection/>} />
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

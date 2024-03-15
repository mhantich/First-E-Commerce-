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
import Erro from "./global/Erro";

const LazyHomeSection = lazy(() => import("./global/Home"));
const LazyDetailsSection = lazy(() => import("./global/Details"));
const LazyProdactSection = lazy(() => import("./global/Shoop"));
const LazyAboutSection = lazy(() => import("./global/About"));
const LazyProdactSignUp = lazy(() => import("./global/SignUp"));

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
          <Route path="/about" element={<LazyAboutSection />} />
          <Route path="/login" element={<LazyProdactSignUp />} />
          <Route path="/shoop" element={<LazyProdactSection />} />
        </Route>
        <Route path="*" element={"erro"} />
      </Route>
    )
  );

  return (
    <Suspense fallback={<Loader />}>
      <RouterProvider router={routers} />
    </Suspense>
  );
};

export default App;

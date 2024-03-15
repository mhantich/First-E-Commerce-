import React, {  lazy } from "react";

const LazyHomesection = lazy(() => import("../components/Homesection"));
const LazyBestSell = lazy(() => import("../components/BestSell"));
const LazyBrands = lazy(() => import("../components/Brands"));
const LazyArrive = lazy(() => import("../components/Arrive"));
const LazyRewies = lazy(() => import("../components/Rewies"));
const LazyContact = lazy(() => import("../components/Contact"));

function Home() {
  return (
    <div style={{overflowX:'hidden'}} className="">
        <LazyHomesection />
        <LazyBestSell /> 
        <LazyBrands />
        <LazyArrive />
        <LazyRewies />
        <LazyContact /> 
     
    </div>
  );
}

export default Home;

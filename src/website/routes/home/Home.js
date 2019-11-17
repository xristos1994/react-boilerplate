import React from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";

export const Home = () => {
  let id = useParams();
  console.log(id);
  return (
    <>
      <Helmet>
        <title>My App | Home</title>
      </Helmet>
      <div> Home </div>
    </>
  );
};

export default Home;

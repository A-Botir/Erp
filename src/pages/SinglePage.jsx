import React from "react";
import { useParams } from "react-router-dom";
import SingleInfo from "../components/SingleInfo";
import SingleHead from "../components/SingleHead";

const SinglePage = () => {
  const params = useParams();
  return (
    <>
      <SingleHead />
      <SingleInfo />
    </>
  );
};

export default SinglePage;

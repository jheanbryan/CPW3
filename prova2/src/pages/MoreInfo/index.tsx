import React, { useEffect, useState } from "react";

import { MainContainer } from "./styles";

import Header from "../../components/Header/index";
import { useNavigate } from "react-router-dom";

const MoreInfo = () => {
  const navigate = useNavigate();

  useEffect(() => {}, []);
  return (
    <>
      <Header />
      <MainContainer></MainContainer>
    </>
  );
};

export default MoreInfo;

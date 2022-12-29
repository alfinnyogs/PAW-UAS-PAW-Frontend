import React from "react";
import LayoutManager from "../pages/LayoutManager";
import KelKasirManager from "../pages/KelKasirManager";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";

const KasirLayoutManager= () => {
  
  return (
    <LayoutManager>
      <KelKasirManager />
    </LayoutManager>
  );
};

export default KasirLayoutManager;
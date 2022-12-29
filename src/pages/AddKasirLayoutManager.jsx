import React from "react";
import LayoutManager from "../pages/LayoutManager";
import TambahKasirManager from "../pages/TambahKasirManager";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";

const AddKasirLayoutManager= () => {
  // const dispatch = useDispatch();
  // const navigate = useNavigate();
  // const { isError } = useSelector((state) => state.auth);

  //   useEffect(() => { ;
  // }, []);

  // useEffect(() => {
  //   if (isError) {
  //     navigate("/");
  //   }
  // }, [navigate]);
  return (
    <LayoutManager>
      <TambahKasirManager />
    </LayoutManager>
  );
};

export default AddKasirLayoutManager;
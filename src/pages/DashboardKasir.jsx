import React from "react";
import LayoutKasir from "../pages/LayoutKasir";
import Welcome from "../pages/Welcome";

const Dashboard = () => {
  // const dispatch = useDispatch();
  // const navigate = useNavigate();
  // const { isError } = useSelector((state) => state.auth);

  // useEffect(() => {
  //   dispatch(getMe());
  // }, [dispatch]);

  // useEffect(() => {
  //   if (isError) {
  //     navigate("/");
  //   }
  // }, [isError, navigate]);

  return (
    <LayoutKasir>
      <Welcome />
    </LayoutKasir>
  );
};

export default Dashboard;
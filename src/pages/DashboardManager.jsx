import React from "react";
import LayoutManager from "./LayoutManager";
import Welcome from "./Welcome";

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
    <LayoutManager>
      <Welcome />
    </LayoutManager>
  );
};

export default Dashboard;
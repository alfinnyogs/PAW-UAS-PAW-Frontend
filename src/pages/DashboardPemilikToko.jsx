import React from "react";
import LayoutPemilikToko from "./LayoutPemilikToko";
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
    <LayoutPemilikToko>
      <Welcome />
    </LayoutPemilikToko>
  );
};

export default Dashboard;
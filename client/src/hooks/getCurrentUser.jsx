import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUserData } from "../redux/userSlice";

const useCurrentUser = () => {
  const dispatch = useDispatch();
  const { userData } = useSelector((state) => state.user);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/user", {
          withCredentials: true,
        });
        dispatch(setUserData(response.data));
      } catch (error) {
        console.log(error);
      }
    };

    fetchUserData();
  }, [dispatch]); 

  return userData;
};

export default useCurrentUser;

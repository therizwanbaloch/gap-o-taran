import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setOtherUsers } from "../redux/userSlice";

const useOtherUsers = () => {
  const dispatch = useDispatch();
  const { otherUsers } = useSelector((state) => state.user);

  useEffect(() => {
    const fetchOtherUsers = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/others", {
          withCredentials: true,
        });
        dispatch(setOtherUsers(response.data.users)); 
      } catch (error) {
        console.error("Failed to fetch other users:", error);
      }
    };

    fetchOtherUsers();
  }, [dispatch]);

  return otherUsers;
};

export default useOtherUsers;

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setMessages } from "../redux/messageSlice";

const useMessages = (selectedUser) => {
  const dispatch = useDispatch();
  const { messages } = useSelector((state) => state.message);

  useEffect(() => {
    if (!selectedUser?._id) {
      dispatch(setMessages([]));
      return;
    }

    const fetchMessages = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/get/${selectedUser._id}`,
          { withCredentials: true }
        );

    
        dispatch(setMessages(response?.data?.data ?? []));
      } catch (error) {
        console.error("Failed to fetch messages:", error);
        dispatch(setMessages([]));
      }
    };

    fetchMessages();
  }, [dispatch, selectedUser]);

  return messages;
};

export default useMessages;

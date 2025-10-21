import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FiSearch, FiX, FiLogOut } from "react-icons/fi";
import dp from "../assets/dp.webp";
import { setUserData, setOtherUsers } from "../redux/userSlice";

const SideBar = () => {
  const { userData, otherUsers } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searchActive, setSearchActive] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleLogout = () => {
    try {
      dispatch(setUserData(null));
      dispatch(setOtherUsers([]));
      localStorage.clear();
      sessionStorage.clear();
      document.cookie.split(";").forEach((cookie) => {
        const name = cookie.split("=")[0].trim();
        document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;`;
      });
      navigate("/");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const filteredUsers = otherUsers?.filter((user) =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const inlineUsers = filteredUsers?.slice(0, 4);

  return (
    <div className="relative lg:w-[30%] w-full h-[100vh] bg-slate-200 flex flex-col overflow-hidden">
      {/* Header */}
      <div className="w-full bg-gradient-to-b from-emerald-500 to-emerald-600 px-5 py-3 flex items-center justify-between rounded-b-lg shadow-md">
        <h1 className="text-white font-extrabold text-lg tracking-wide drop-shadow-md">
          Gap-O-Taran
        </h1>
        <div
          onClick={() => navigate("/profile")}
          className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white cursor-pointer hover:scale-110 transition-transform shadow-inner"
          title="Go to Profile"
        >
          <img
            src={userData?.user?.image || dp}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Search + Inline Users */}
      <div className="w-[95%] mx-auto mt-3 flex flex-col gap-3 rounded-xl shadow-lg border border-white/20 bg-gradient-to-r from-white/40 to-emerald-50 backdrop-blur-md p-3">
        {searchActive ? (
          <div className="flex items-center bg-white/80 rounded-full shadow-inner px-4 py-2 border border-white/30 w-full">
            <FiSearch className="text-emerald-700 mr-2" size={18} />
            <input
              type="text"
              placeholder="Search chats..."
              className="flex-1 bg-transparent text-gray-800 text-sm outline-none placeholder-gray-400 px-1"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              autoFocus
            />
            <button
              onClick={() => {
                setSearchActive(false);
                setSearchQuery("");
              }}
              className="text-emerald-700 hover:text-red-500 transition ml-2"
              title="Cancel"
            >
              <FiX size={20} />
            </button>
          </div>
        ) : (
          <div className="flex items-center justify-between w-full">
            <div className="flex gap-2">
              {inlineUsers?.length > 0 ? (
                inlineUsers.map((user) => (
                  <img
                    key={user._id}
                    src={user.image || dp}
                    alt={user.name}
                    title={user.name}
                    className="w-12 h-12 rounded-full object-cover cursor-pointer hover:scale-110 transition-all shadow-sm border border-white/40"
                    onClick={() => navigate(`/chat/${user._id}`)}
                  />
                ))
              ) : (
                <p className="text-gray-500 text-sm">No online users</p>
              )}
            </div>
            <button
              onClick={() => setSearchActive(true)}
              className="bg-emerald-500 hover:bg-emerald-700 text-white p-2 rounded-full transition flex items-center justify-center"
              title="Search"
            >
              <FiSearch size={18} />
            </button>
          </div>
        )}
      </div>

      {/* Vertical User Chat List */}
      <div className="w-full flex-1 overflow-y-auto px-3 py-3 mt-2 space-y-2">
        {filteredUsers?.length > 0 ? (
          filteredUsers.map((user) => (
            <div
              key={user._id}
              className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 cursor-pointer hover:bg-emerald-100 transition-colors duration-200 shadow-sm"
              onClick={() => navigate(`/chat/${user._id}`)}
            >
              <img
                src={user.image || dp}
                alt={user.name}
                className="w-12 h-12 rounded-full object-cover border border-gray-200 shadow"
              />
              <div className="flex flex-col truncate">
                <h3 className="font-semibold text-gray-800 truncate">
                  {user.name}
                </h3>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 mt-5">No users found.</p>
        )}
      </div>

      {/* Logout Button */}
      <button
        onClick={handleLogout}
        className="absolute bottom-5 right-5 flex items-center gap-2 bg-emerald-500/90 hover:bg-emerald-600 text-white px-4 py-2 rounded-full shadow-lg transition transform hover:scale-105 hover:shadow-emerald-400/50 z-20"
        title="Logout"
      >
        <FiLogOut size={18} />
        <span className="text-sm font-medium">Logout</span>
      </button>
    </div>
  );
};

export default SideBar;

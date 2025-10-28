import React from 'react'
import SideBar from '../components/SideBar'
import MessageArea from '../components/MessageArea'
import { useSelector } from 'react-redux'
import useMessages from "../hooks/getMessages";

const Chat = () => {
  let selectedUser = useSelector(state => state.user)
  useMessages();
  return (
    <div className='flex h-full w-full'>
      <SideBar/>
      <MessageArea/>
    </div>
  )
}

export default Chat
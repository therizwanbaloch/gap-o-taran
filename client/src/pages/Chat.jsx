import React from 'react'
import SideBar from '../components/SideBar'
import ChatArea from '../components/ChatArea'

const Chat = () => {
  return (
    <div className='flex h-full w-full'>
      <SideBar/>
      <ChatArea/>
    </div>
  )
}

export default Chat
import React from 'react'
import SideBar from '../components/SideBar'
import MessageArea from '../components/MessageArea'

const Chat = () => {
  return (
    <div className='flex h-full w-full'>
      <SideBar/>
      <MessageArea/>
    </div>
  )
}

export default Chat
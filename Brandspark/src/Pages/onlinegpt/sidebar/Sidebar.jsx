import React, { useContext, useState } from 'react'
import './Sidebar.css'
import menu_icon from '../../../assets/menu_icon.png'
import plus_icon from '../../../assets/plus_icon.png'
import message_icon from '../../../assets/message_icon.png'
import { Context } from '../context/Context'



const Sidebar = () => {

    const [extended,setExtened] =useState(false)
    const {onSent,prevPrompts,setRecentPrompt,newChat} = useContext(Context)

    const loadPrompt =async (prompt) =>{
      setRecentPrompt(prompt)
      await onSent(prompt)
    }

  return (
    <div className='sidebar'>
      <div className="top">
        <img onClick={()=>setExtened(prev=>!prev)} className='menue' src={menu_icon} alt="" />
        <div onClick={()=>newChat()} className="new-chat">
            <img src={plus_icon} alt="" />
           {extended?<p>New Chat</p>:null} 
        </div>
        {extended?
        <div className="recent">
        <p className="recent-title">Recent</p>
        {prevPrompts.map((item,index)=>{
            return(
                <div onClick={()=>loadPrompt(item)} className="recent-entry">
                <img src={message_icon} alt="" />
                <p>{item.slice(0,18)}...</p>
            </div>
            )
        })}
        
    </div>
    :null
        }
        
      </div>
      

      
    </div>
  )
}

export default Sidebar

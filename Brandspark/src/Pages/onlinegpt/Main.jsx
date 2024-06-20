import React from 'react'
import Sidebar from './sidebar/Sidebar'
import Basic from './basic/Basic'
import './Main.css'
import ContextProvider from './context/Context'

const Main = () => {
  return (
    <div className='main-com'>
       <ContextProvider>
         <Sidebar/>
         <Basic/>
        </ContextProvider> 
      
      
    </div>
  )
}

export default Main

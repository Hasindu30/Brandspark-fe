import React, { useContext } from 'react'
import './Basic.css'
import logo3 from '../../../assets/logo2.png'
import gallery_icon from '../../../assets/gallery_icon.png'
import send_icon from '../../../assets/send_icon.png'
import mic_icon from '../../../assets/mic_icon.png'
import { Context } from '../context/Context'
import { Link } from 'react-router-dom'


const Basic = () => {

    const {onSent,recentPrompt,showResult,loading,resultData,setInput,input} =useContext(Context);
    const handleKeyPress = (event) => {
      if (event.key === 'Enter' && input) {
        onSent();
      }
    };
    
  return (
    <div className='basic'>
      <div className="basic-nav">
        <p>Brandspark</p>
        <Link to='/'><img src={logo3} alt="" className='logo'/> </Link>
      </div>
      <div className="basic-container">

        {!showResult
        ?<>
             <div className="greet">
            <p><span>Hello,welcome to Brandspark.</span></p>
            <p>How can I help you today?</p>
        </div>
        </>
        :<div className='resultge'>
            <div className="resultge-title">
                <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
                <img src={logo3} alt="" />
                {loading
                ?<div className='loader'>
                    <hr />
                    <hr />
                    <hr />
                    </div>
            :<p dangerouslySetInnerHTML={{__html:resultData}}></p>
            }
                
            </div>
        </div>
        }

       
        

        <div className="basic-bottom">
        <div className="search-boxb">
            <input onChange={(e)=>setInput(e.target.value)} value={input} type="text" placeholder='Enter prompt here'
             onKeyPress={handleKeyPress} />
            <div>
                <img src={gallery_icon} alt="" />
                <img src={mic_icon} alt="" />
                {input?<img onClick={()=>onSent()} src={send_icon} alt="" />:null}
                
            </div>
        </div>
        <p className='bottom-info'>
            Brandspark AI generate inaccurate info,including about people,so double-check its response
        </p>
        
      </div>
      
      </div>
      
      
    </div>
  )
}

export default Basic

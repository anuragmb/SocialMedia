import React from 'react'
import './Chat.css'
function Chat() {
  return (
    <div>
        <div>
            <div className='chat__header'>
                <img className='chat__person' src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="online__image" />
                <div className='chat__wrapper'>
                    <h5>Anurag</h5>
                    <p className='online__status'>Online</p>
                </div>
                
            </div>
            
        </div>
        <div className='chat__container'>
            <div className='left__person'>
                <div>
                    <p>Hello</p>
                </div>
            </div>
            <br/>
            <br/>
            <div className='right__person'>
                <div>
                    <p>Hello</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Chat

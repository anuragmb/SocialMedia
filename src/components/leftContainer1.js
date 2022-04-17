import React from 'react'
import './leftContainer1.css'
function leftContainer1() {
  return (
    <div className='container'>
        <div className='profile'>
            <img className='profile__img' src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="profile" />
            <h5>Anurag M B</h5>
            <button>Position : S/m Engineer</button>
            <button>Your Timeline</button>
            <button>who viewed your profile : 100</button>
            <button>Your engagements : 4</button>
        </div>
    </div>
  )
}

export default leftContainer1

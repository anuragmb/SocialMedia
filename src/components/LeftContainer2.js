import axios from 'axios';
import React from 'react'
import { useEffect, useState } from 'react'
import './LeftContainer2.css'
function LeftContainer2() {
  const [news,setNews]=useState([]);
  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/posts').then((response)=>{
      setNews(response.data)
    })
  })
  return (
    <div className='container'>
        <div className='profile2'>
            <h4 className='text__heading'>Daily Job News</h4>
            {
              news.map((obj)=>{
                return(
                  <ul>
                      <li>{obj.body}</li><button className='apply__button'>Apply</button>
                  </ul>
                ) 
              })
            }
        </div>
    </div>
  )
}

export default LeftContainer2

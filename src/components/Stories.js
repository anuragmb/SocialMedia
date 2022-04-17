import './Stories.css'
import axios from 'axios';
import {useEffect,useState} from 'react';
function Stories(){
    const [resdata,setData]=useState([]);
    
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/photos').then((response)=>{
            setData(response.data)
        })
        
    },[])

    return(
    <div className='container'>
        <div className='stories'>
        {
            resdata.map((obj)=>{
                return(
                    <div>
                        <div className='each__stories'>
                            <img className='story__img' src={obj.thumbnailUrl} alt="story"/>
                        </div>
                        <br/>
                    </div>
                );
            })
        }
        </div>
    </div>
    );
}
export default Stories;
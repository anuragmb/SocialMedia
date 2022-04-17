import React from 'react'
import './CreatePost.css'
function CreatePost() {
  return (
    <div className='container'>
      <form>
        <div className="form-group">
            <label for="exampleFormControlInput1">Email address</label>
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
        </div>
        <div className="form-group">
            <label for="exampleFormControlSelect1">Select Category</label>
            <select className="form-control" id="exampleFormControlSelect1">
                <option>HR</option>
                <option>Domain</option>
                <option>Marketing</option>
                <option>Finance</option>
                <option>Medical</option>
            </select>
        </div>
        <div className="form-group">
            <label for="exampleFormControlInput1">Url of Image</label>
            <input type="url" className="form-control" placeholder="url of Image to be uploaded"/>
        </div>
        <div className="form-group">
            <label for="exampleFormControlTextarea1">Description</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
        <div className='form-group'>
            <input type="submit"/>
        </div>
    </form>
    </div>
  )
}

export default CreatePost

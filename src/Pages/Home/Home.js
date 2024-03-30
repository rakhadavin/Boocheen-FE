import React, { useEffect, useReducer, useState } from 'react'
import {useSelector,useDispatch} from 'react-redux';
import Welcoming from '../../Components/redux/Welcoming/Welcoming';
import Button  from 'react-bootstrap/Button';


const Home = () => {
  const dispatch = useDispatch()
  const [authors_name,setAuthor] = useState("")
  const [message, setMessage] = useState("I have Crushed On You")
  const [crush,setCrush] = useState("")
  const [confess_text,setConfess_text] = useState("")
  const {user} = useSelector((state)=>state)

  useEffect(()=>{
console.log(user);
console.log(user.data);
console.log(authors_name)

  setAuthor(user.data.author)
  setMessage(user.data.message)
  setCrush(user.data.crush_name)
  setConfess_text(user.data.confess_text)
  },[])

  return (
    <div className='main-container'>
      <Welcoming />
       
        
        <div className="main-content">
          <div className="author">
            <h1>
              From : {authors_name}
            </h1></div>
          <div className="content-box">
            <div className="crush-name-container">Hi, <p className='crush-name'> {crush}</p></div>
            <div className="message">
              {message}
            </div>
            <div className="confess_text">
              {confess_text}
            </div>
          </div>
            <div className="button">
                <div className="yes">
                  <Button variant="success">Yes</Button>
                </div>
                <div className="no">
                  <Button variant="danger">Think it again</Button>
                </div>
            </div>
        </div>
        <div className="visit-us">
        <Button variant="outline-primary">Visit Us</Button>

        </div>
        <div className="copyright">
          <h3>Copyright by <p>Rakha Davin</p></h3>
        </div>

      
    </div>
  )
}

export default Home

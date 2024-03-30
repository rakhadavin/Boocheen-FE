import React, { useState } from 'react'
import Welcoming from '../../Components/redux/Welcoming/Welcoming';
import Button from 'react-bootstrap/Button';
import "./Crush.css"

const Crush = () => {


  const [copied, setCopied] = useState("false")


  const copy = (e) => {

  }
  return (
    <div className='newCrush-container'>
      <Welcoming />
      <div className="main-content">
        <div className="example-content">
          <h3 className="title">Example</h3>

          <div className="example-box">
            <div className="author-name">From : Dave</div>
            <div className="content-box">
              <div className="crush-name-box crush-name"><p className="crush-name">Hai,<p>Jessica Alba</p></p></div>
              <div className="message">I have a crushed on you, how about you ?</div>
              <div className="confess-text">Will you be my everythings ? </div>
            </div>

            <div className="confirm-btn">
              <Button variant="success" className='confirm-btn-item' >Yes</Button>
              <Button variant="danger" className='confirm-btn-item'>No</Button>

            </div>
          </div>

        </div>



        <div className="yours-content">
          <h3 className="title">Get Started</h3>
          <div className="get-started">
            <div className="input-box">
              <input type="text" className="author-input" placeholder='Your Name' />
              <input type="text" className="crush-name-input" placeholder='Crush Name' />
              <textarea className="message-input" placeholder='What do you feel about her/him ?' />
              <input type="text" className="confess-text-input" placeholder='Confess Here' />
            </div>
            <div className="btn-submit">
              <Button variant='success' className='save-btn'>Save</Button>
            </div>
          </div>
        </div>
      </div>

      <div className="links">
        <div className="crush-link">
          <p href=" https://boocheen-fe.vercel.app/yourname/love/crushname" className='links-text'> https://boocheen-fe.vercel.app/yourname/love/crushname</p>
        </div>
        <div className="copy-button">
          <Button variant='outline-info' id='copy-btn'>Copy This Link</Button>

        </div>
      </div>
      <div className="floating-btn">
        <div class="text-box">
          <a href="#" class="btn btn-white btn-animate new-btn">Create New</a>
        </div>
      </div>
      <div className="copyright">
        <h2 className='copyright-text'>Copyright By Rakha Davin</h2>
      </div>
    </div>
  )
}

export default Crush

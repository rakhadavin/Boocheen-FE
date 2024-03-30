import React from 'react'
import Welcoming from '../../Components/redux/Welcoming/Welcoming';
import Button  from 'react-bootstrap/Button';

const Crush = () => { 
  return (
    <div className='newCrush-container'>
        <Welcoming />
      <div className="main-content">
        <div className="example-box">
          <div className="author-name">From : Dave</div>
          <div className="content-box">
            <div className="crush-name-box">Hai <p className="crush-name">Jessica Alba</p></div>
            <div className="message">I have a crushed on you..</div>
            <div className="confess-text">Will you be my everythings for me ? </div>
          </div>

          <div className="confirm-btn">
            <Button variant="success" >Yes</Button>
            <Button variant="danger">No</Button>

          </div>
        </div>
        <div className="get-started"></div>
      </div>

      <div className="links">
        <div className="crush-link"></div>
        <div className="copy-button"></div>
      </div>
      <div className="floating-btn">
        <Button className='primary'>Create New</Button>
        </div>      
      <div className="copyright">
        <h2>Copyright By Rakha Davin</h2>
      </div>
    </div>
  )
}

export default Crush

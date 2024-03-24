import React from 'react'
import "../styles/Footer/Footer.css";
const Footer = () => {
  return (
    <div id="footer" className='footer'>
        <div className="container ">
        <div className="sec fabout">
            <h1>IEEE-BPIT</h1>
            <p>IEEE BPIT, a Technical Society of Bhagwan Parshuram Institute of Technology, aims to equip students with
            technical knowledge and skills that will prepare them for the professional world. We encourage students to
            participate in technical competitions and provide a platform for collaborative learning. Our community of
            engineering students and experienced mentors strive to make a positive impact and bring about change in this
            competitive world.</p>
            <div className='social'>
            <li><a href="https://www.instagram.com/ieee.bpit/"><i className="fa-brands fa-square-instagram"
                    target="_blank"></i></a>
            </li>
            <li><a href="https://www.facebook.com/bpitieee16/"><i className="fa-brands fa-facebook" target="_blank"></i></a>
            </li>
            <li><a href="https://www.youtube.com/channel/UCawjuIqAK3LoHgiOg39YPAw"><i className="fa-brands fa-youtube"
                    target="_blank"></i></a></li>
            <li><a href="https://in.linkedin.com/company/ieee-bpit" target="_blank"><i
                    className="fa-brands fa-linkedin"></i></a></li>
            </div>
        </div>
        <div className="sec fcontact">
            <h3>Contact Us</h3>
            <ul className="info">
            <li>
                <span><i className="fa-solid fa-location"></i></span>
                <p>Bhagwan Parshuram Institute of Technology <br/> Rohini, Delhi</p>
            </li>
            <li>
                <span><i className="fa-solid fa-phone"></i></span>
                <a href='tel:6202423282'>+91 6202 423 282</a>
                
            </li>
            <li>
                <span><i className="fa-solid fa-envelope"></i></span>
                <a href='mailto:ieee-bpit@bpitindia.com'>ieee-bpit@bpitindia.com</a>
            </li>
            </ul>
        </div>
        </div>
        <div className='copy'>
        <p>© IEEE - BPIT | Made By K.A</p>
        </div>
    </div>
  )
}

export default Footer

import React from 'react'
import './css/widget.css'
import InfoIcon from '@mui/icons-material/Info';

function Widget() {
  return (
    <div className='widget'>
        <div className='widget_top'>
            <div className='widget_header'>
                <h4>LinkedIn News</h4>
                <InfoIcon/>
            </div>
            <div className='widget_body'>
                <ul className='widget_options'>
                    <li>
                        <h4>Banking set for a digital makeover</h4>
                        <p>Updated 3 days ago</p>
                    </li>
                    <li>
                        <h4>Tata Projects to hire 400 freshers</h4>
                        <p>Updated 3 days ago</p>
                    </li>
                    <li>
                        <h4>Cities leading flex office stock</h4>
                        <p>By Preethi Ramamoorthy, Editor at LinkedIn News</p>
                    </li>
                    <li>
                        <h4>IPL now a decacorn</h4>
                        <p>By Abhiraj Ganguli, Editor at LinkedIn News</p>
                    </li>
                    <li>
                        <h4>How will AI impact telecom?</h4>
                        <p>By Abhiraj Ganguli, Editor at LinkedIn News</p>
                    </li>
                </ul>
            </div>
        </div>
        <div className='widget_bottom'>
            <div className='widget_header'>
                <h4>Today's top courses</h4>
                <InfoIcon/>
            </div>
            <div className='widget_body'>
                <ul className='widget_options'>
                    <li>
                        <h4>Learn with Kuldip Cahuahn</h4>
                        <p>React</p>
                    </li>
                    <li>
                        <h4>Learn with Kuldip Cahuahn</h4>
                        <p>HTML-CSS-JS</p>
                    </li>
                    <li>
                        <h4>Learn with Kuldip Cahuahn</h4>
                        <p>JAVA</p>
                    </li>
                    <li>
                        <h4>Learn with Kuldip Cahuahn</h4>
                        <p>Python</p>
                    </li>
                    <li>
                        <h4>Learn with Kuldip Cahuahn</h4>
                        <p>Bootstrap</p>
                    </li>
                    <li>
                        <h4>Learn with Kuldip Cahuahn</h4>
                        <p>NodeJs</p>
                    </li>
                </ul>
            </div>
        </div>
      
    </div>
  )
}

export default Widget

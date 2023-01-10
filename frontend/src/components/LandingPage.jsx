import React from 'react'
import heroImage from '../images/roversChampions2022.jpg';
import '../landing.css';

function LandingPage() {
  return (
    <div>
        <div className='container'> 
        <img src={heroImage} alt="Championship winning photo" className='heroImage'/>
        </div>
    </div>
  )
}

export default LandingPage
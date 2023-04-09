import React, { useState } from 'react'
import { AllTours } from './AllTours'

export const SingleTour = ({el, filterTour}) => {
    const{info, name, image} = el
    const [btn, setBtn] = useState(false)

    
  return (
    <div className='card-item'>
        <img src={image} alt="" />
        <div className="x">
            <h2>{name}</h2>
            <p>{btn ? info : `${info.substring(0,100)}...`}</p>
            <button className='read-more'onClick={()=>setBtn((prev)=>!prev)}>{btn ? 'read more': 'read less'}</button>
            <button className='not' onClick={()=> filterTour(name)}>Not interested</button>
        </div>
    </div>
  )
}

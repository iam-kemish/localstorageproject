import { useContext } from 'react';
import React from 'react'
import { contexted } from './Context/Context'

const StartPage = () => {
    const {state, setState} = useContext(contexted);
  return (
    <div className='container my-3 firstpg'>
      <h6>We welcome you here. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora in at ipsam, maiores amet corrupti tempore quibusdam vero, explicabo veniam itaque repellat suscipit, nobis iure est deserunt reiciendis nostrum culpa! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi minima fuga saepe officia dolorem totam nam magni aperiam pariatur, deserunt maxime dolores porro. Iure tempore earum veniam deserunt debitis ad.  </h6><br/>
      <button className='btn btn-primary mx-auto' style={{width: "100%"}}  onClick={()=>setState("form")}>Enter form</button>
     
    </div>
  )
}

export default StartPage

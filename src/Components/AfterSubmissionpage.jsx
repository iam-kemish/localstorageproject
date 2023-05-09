import React, { useContext, useState } from 'react'
import { contexted } from './Context/Context';

const AfterSubmissionpage = () => {
  const{data, setData} = useContext(contexted);
  const saveData = (e)=>{
    e.preventDefault();
    const savedData =JSON.parse(localStorage.getItem("Userdatas"))
    if (savedData) {
      alert("Datas are already saved.")
    } else {
      localStorage.setItem("Userdatas", JSON.stringify(data))
      alert("Your datas are saved successfully.")
        setData({
          name: "",
          email: "",
          gender: "",
          dob: ""
      })
    }
    
    }
  return (
    <div className='container my-3 last'>
      <div className="card" style={{width: "18rem"}}>
  <div className="card-header">
    User details
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">Name : {data.name}</li>
    <li className="list-group-item">Email : {data.email}</li>
    <li className="list-group-item">Gender : {data.gender}</li>
    <li className="list-group-item">Date of birth : {data.dob}</li>
  </ul>
</div>
    <button className='btn btn-primary' onClick={saveData}>Save datas</button>  
    </div>
  )
}

export default AfterSubmissionpage

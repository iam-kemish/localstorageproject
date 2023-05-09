import React, { useContext, useState } from "react";
import { contexted } from "./Context/Context";

const Formpage = () => {
  const { state, setState, data, setData } = useContext(contexted);

  const handleClick = (e) => {
    e.preventDefault();
    if (data.name === "" || data.email === " "  || data.gender === "" || data.dob === "") {
      alert("Please fill up the required details");
    } else {
      setState("results");
    }
  };
  return (
    <div className="container my-3">
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Fullname
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Type your fullname"
            value={data.name}
            onChange={(e) => setData({ ...data, name: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Type your mail address"
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleSelect" className="form-label">Select your Gender</label>
          <select className="form-control" id="exampleSelect" value={data.gender} onChange={(e)=> setData({...data, gender: e.target.value})} >
            <option>Male</option>
            <option>Female</option>
            <option>Trans</option>
          </select>
          <br />
        </div>
        <div className="form-group">
          <label htmlFor="exampleSelect" className="form-label">Date of Birth:</label><br/>
          <input type="date" id="birthdate" name="birthdate" value={data.dob} onChange={(e)=> setData({...data, dob: e.target.value})} />
        </div><br/>

        <button
          className="btn btn-primary"
          style={{width:"100%"}}
          onClick={handleClick}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Formpage;

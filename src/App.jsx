import { useState } from "react"
import { contexted } from "./Components/Context/Context"
import StartPage from "./Components/StartPage"
import AfterSubmissionpage from "./Components/AfterSubmissionpage"
import Formpage from "./Components/Formpage"
import "./App.css";
function App() {
  
 const[state, setState] = useState("start");

 const[data, setData] = useState({
  name: "",
  email: "",
  gender: " ",
  dob: ""
  
})

  return (

   <contexted.Provider value={{state, setState,data, setData}}>
     <div className="container">
     {state === "start" && <StartPage/>}
     {state === "results" && <AfterSubmissionpage/>}
     {state === "form" &&  <Formpage/>}
     
     </div>
   </contexted.Provider>
  )
}

export default App

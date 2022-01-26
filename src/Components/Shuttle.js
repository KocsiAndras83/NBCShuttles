import React, {useState} from 'react'
import Data from "../ShuttleTimes/shuttleTimes.json"

const Shuttle = () => {
  
  let minute = new Date().getMinutes()
  let leavingMinute = 0
 // const leavingtime = Data[0].leavingtime
 // console.log(leavingtime)

  const CheckTime = () => {
    let hour = new Date().getHours()
    if (hour >= 0 && hour < 6) {
      leavingMinute = 120
    }
    else if (hour >= 10 && hour < 18) {
      leavingMinute = 60
    }
    else {
      leavingMinute = 20
    }
  }


  
  //console.log(leavingMinute)
  
  const [newMinute, setNewMinute] = useState(minute)

  const UpdateMinute = () => {
    minute = new Date().getMinutes()
    CheckTime(minute)
    setNewMinute(leavingMinute-minute)
  }

  //const CorrectLeavingTime = () => {
  //  const leavingMinute = Data.leavingtime
    
  

  setInterval(
    UpdateMinute,
     
    5000)

  return (
    <div>
      { Data.map(item => {

        return(
          <div>
              <h3>{item.BusCode}</h3>
              <h4>{item.Destination}</h4>
              <h5>Next Shuttle will leave in: {newMinute} minutes</h5>
          </div>
          
        )
      })}
      
    </div>
  )
}

export default Shuttle

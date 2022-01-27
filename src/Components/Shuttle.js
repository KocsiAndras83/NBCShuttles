import React, {useState} from 'react'
import Data from "../ShuttleTimes/shuttleTimes.json"
import Yaoo from "../ShuttleTimes/YaaoInternational.json"

let leavingTime1 = Data[0].leavingtimes[0].slice(3,5)
console.log(leavingTime1)

let leavingTime2 = Yaoo[0].leavingtimes[1].slice(3,5)
console.log(leavingTime2)

const Shuttle = () => {
  
  let minute = new Date().getMinutes()
  let leavingMinute = 0

  
  


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

  
  
  const [newMinute, setNewMinute] = useState(minute)
  
  const UpdateMinute = () => {
    minute = new Date().getMinutes()
    setNewMinute(leavingMinute-minute)
  }

  setInterval(
    UpdateMinute,
    CheckTime(),
    59000)

  

  return (
    <div>
      { Data.map(item => {

        return(
          <div>
              <h3>{item.BusCode}</h3>
              <h4>{item.Destination}</h4>
              <h5>Next Shuttle will leave in: {newMinute} minutes</h5>
              <h5>Shuttles are every {} minutes</h5>
          </div>
          
        )
      })}
      
    </div>
  )
}

export default Shuttle

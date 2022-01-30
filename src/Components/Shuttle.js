import React, {useState} from 'react'
import getNextShuttles from '../utils/getNextShuttles'
import Data from "../ShuttleTimes/shuttleTimes.json"
import Yaoo from "../ShuttleTimes/YaaoInternational.json"

let leavingTime1 = Data[0].leavingtimes[0].slice(0,2)
console.log(leavingTime1)

let leavingTime2 = Yaoo[0].leavingtimes[1].slice(3,5)
console.log(leavingTime2)

getNextShuttles(Data)

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
    59000
  )

  return (
    <div className="shuttle-container">
      { Data.map(item => {

        return(
            <div className="shuttle" key={item.BusCode}>
              <h1>{item.BusCode}</h1>
              <h2>{item.Destination}</h2>
              <h2>Next Shuttle will leave in: {newMinute} minutes</h2>
              <h2>Shuttles are every {leavingMinute} minutes</h2>
              <h4>Next 3 shuttles are:</h4>
              <h3>10:50</h3>
              <h5>11:20</h5>
              <h6>11:40</h6>
            </div>
        )
      })}
      
    </div>
  )
}

export default Shuttle

import React, {useState} from 'react'

const Time = () => {

  let timeNow = new Date().toLocaleTimeString('en-US')

  const [currentTime, setCurrentTime] = useState(timeNow)

  const UpdateTime = () => {
    timeNow = new Date().toLocaleTimeString('en-US')
    setCurrentTime(timeNow)
  }

  setInterval(UpdateTime, 1000) 

  return (
    <div className="time">
      <p>{currentTime}</p>
    </div>
  )
}

export default Time

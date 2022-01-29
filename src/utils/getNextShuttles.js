const getNextShuttles = (data) => {
  const nextShuttles = []
  const timeNow = Date.now()

  data.forEach(hotelShuttles => {
    // convert to an array and sort
    const leavingtimes = Object.values(hotelShuttles.leavingtimes)
    leavingtimes.sort((a, b) => createTime(a) - createTime(b))

    const shuttle = {
      destination: hotelShuttles.Destination,
      busCode: hotelShuttles.BusCode
    }

    for(let time of leavingtimes) {
      console.log(time)
      if(createTime(time) > timeNow) {
        shuttle.leavingTime = time
        break
      }
    }

    nextShuttles.push(shuttle)
  })
  console.log(nextShuttles)
  return nextShuttles
}


const createTime = (time) => {
  const date = new Date()
  time = time.split(":")

  date.setHours(time[0])
  date.setMinutes(time[1])
  date.setSeconds(0)
  date.setMilliseconds(0)

  return date.getTime()
}

export default getNextShuttles
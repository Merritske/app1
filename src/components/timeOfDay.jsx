function Time(){
    const hours = new Date().getHours()
    let timeOfDay
    if(hours <12){
        timeOfDay = "morning"
    }else if(hours >= 12 && hours < 17){
        timeOfDay = "afternoon"
    }else if(hours>=17 && hours < 20){
        timeOfDay = "evening"
    }else{
        timeOfDay = "night"
    }
    return(
        <div className="time"> 
            <h1>Good {timeOfDay}!</h1>
        </div>
    )
}
export default Time
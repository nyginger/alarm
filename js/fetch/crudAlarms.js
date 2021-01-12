
 // get all alarms 
export const getAlarmList =  JSON.parse(localStorage.getItem('alarms'))

// Add an alarm
export const addAlarm = () => {
    var alarmItemList =getAlarmList
    const alarmDate=document.querySelector('#alarmDate').value
    var alarmWkList=[]
    const alarmTime=document.querySelector('#alarmTime').value

    if (document.querySelector('#repeat_check').checked){
        var wkDay= document.querySelectorAll('.wkday')
        wkDay.forEach(dd =>{
            if (dd.checked){
                alarmWkList.push(1)
            }else{
                 alarmWkList.push(0) 
            }
        })
    }else{
        alarmWkList=Array(7).fill(0)
    }
    if(alarmTime==''){
        alert('Please select the time');
    } else if (alarmDate==''){
        alert('Please add a date');
    } else{
        const new_alarm={
            id: Math.random().toString(36).substr(2, 5),
            date: alarmDate,
            time: alarmTime,
            repeat:document.querySelector('#repeat_check').checked,
            wkday:alarmWkList
        }
        if (getAlarmList==null){
            var alarmItemList=[];
        }
 
        alarmItemList.push(new_alarm);
        localStorage.setItem('alarms', JSON.stringify(alarmItemList));
        location.reload();
    }
}


// Update specific alarm card
export const updateAlarm = (alarm) => {
    const alarmBox=document.querySelector(`#box_${alarm.id}`)
    var i=0
    getAlarmList.forEach(alarmitem => {
        if (alarmitem.id==alarm.id){
            getAlarmList.splice(i,1)
        }
        i++
    })

    var alarmItemList =getAlarmList
    const alarmDate=document.querySelector('#alarmDate').value
    var alarmWkList=[]
    const alarmTime=document.querySelector('#alarmTime').value

    if (document.querySelector('#repeat_check').checked){
        var wkDay= document.querySelectorAll('.wkday')
        wkDay.forEach(dd =>{
            if (dd.checked){
                alarmWkList.push(1)
            }else{
                 alarmWkList.push(0) 
            }
        })
    }else{
        alarmWkList=Array(7).fill(0)
    }
    if(alarmTime==''){
        alert('Please select the time');
    } else if (alarmDate==''){
        alert('Please add a date');
    } else{
        const new_alarm={
            id: alarm.id,
            date: alarmDate,
            time: alarmTime,
            repeat:document.querySelector('#repeat_check').checked,
            wkday:alarmWkList
        }
        if (getAlarmList==null){
            var alarmItemList=[];
        }
        alarmItemList.push(new_alarm);
        localStorage.setItem('alarms', JSON.stringify(alarmItemList));
    }


    localStorage.setItem('alarms', JSON.stringify(getAlarmList));
    location.reload()

}




 // Remove a specific alarm 
export const removeAlarm = (alarm) => {
    const alarmBox=document.querySelector(`#box_${alarm.id}`)
    var i=0
    getAlarmList.forEach(alarmitem => {
        if (alarmitem.id==alarm.id){
            getAlarmList.splice(i,1)
        }
        i++
    })
    localStorage.setItem('alarms', JSON.stringify(getAlarmList));
    location.reload()

}
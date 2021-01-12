import { setAttributes } from '../etc.js'
import { removeAlarm } from '../fetch/crudAlarms.js'

// Display item delete button
export const alarmCancelItem= (alarm) => {
    const alarmCancelDiv= document.createElement('div')
    alarmCancelDiv.classList.add('max-h-0')
    const cancelIcon =document.createElement('i')
    cancelIcon.classList.add('fas','fa-2x','fa-times-circle','cursor-pointer')
    setAttributes(cancelIcon,{'style':'color:Tomato;position:relative;top:-7px;right:-97%','data-alarm-id':alarm.id})
    cancelIcon.addEventListener('click',() => {removeAlarm(alarm)})
    alarmCancelDiv.append(cancelIcon)
    
    return alarmCancelDiv
}


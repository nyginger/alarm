import { setAttributes } from '../etc.js'
import { alarmUpdEdBtnContents } from './editLayout.js'
import { repeatDetailLayout } from './repeatWkDayLayout.js'

// Display alarm detail icon
export const alarmDetailIconItem = (alarm) => {
    const alarmDetailIconWrapper = document.createElement('div')
    alarmDetailIconWrapper.classList.add('col-start-7','col-end-8','row-start-3','row-span-1','mt-3','place-self-center')
    const alarmDetailIconDiv= document.createElement('i')
    alarmDetailIconDiv.classList.add('fas','fa-chevron-down','cursor-pointer')
    setAttributes(alarmDetailIconDiv, {'id':`arrow_${alarm.id}`, 'data-alarm-id':`${alarm.id}`,'data-time':`${alarm.time}`,'data-wkday':`${alarm.wkday}`})
    alarmDetailIconDiv.addEventListener('click',() => {showAlarmDetail(alarm)})
                     
    alarmDetailIconWrapper.append(alarmDetailIconDiv)
    return alarmDetailIconWrapper                
}


// function triggered when click detail button
const showAlarmDetail = (alarm) => {
    
    const alarmArrowIcon=document.querySelector(`#arrow_${alarm.id}`)
    if (alarmArrowIcon.classList.contains('fa-chevron-down')){
        // Display alarm details
        const alarmItemContents= document.getElementById(`box_${alarm.id}`)
        alarmItemContents.append(repeatDetailLayout(alarm))
        alarmItemContents.append(alarmUpdEdBtnContents(alarm))
        alarmItemContents.focus()
        alarmArrowIcon.classList.remove('fa-chevron-down')
        alarmArrowIcon.classList.add('fa-chevron-up')
        alarmArrowIcon.removeEventListener('click',() => {showAlarmDetail(alarm)})
        alarmArrowIcon.addEventListener('click',() => {hideAlarmDetail(alarm)})
        
    }
}
 
// Function triggered when clicking hide details
export const hideAlarmDetail = (alarm) => {
    const alarmArrowIcon=document.querySelector(`#arrow_${alarm.id}`)
    if (alarmArrowIcon.classList.contains('fa-chevron-up')){
        const alarmItemContents=document.getElementById(`box_${alarm.id}`)
        alarmItemContents.removeChild(document.getElementById(`rptWk_${alarm.id}`))
        alarmItemContents.removeChild(document.getElementById(`uptedtBtn_${alarm.id}`))
        alarmArrowIcon.removeEventListener('click',() => {hideAlarmDetail(alarm)})
        alarmArrowIcon.addEventListener('click',() => {showAlarmDetail(alarm)})
        alarmArrowIcon.classList.remove('fa-chevron-up')
        alarmArrowIcon.classList.add('fa-chevron-down')
    }
}   



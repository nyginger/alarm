import { setAttributes } from '../etc.js'



//Display Update Edit button
export const alarmUpdEdBtnContents = (alarm) => {
    const alarmUptEdtLayout= document.createElement('div')
    alarmUptEdtLayout.classList.add('col-span-7','flex','justify-between','row-start-6','mt-4','px-4','pb-4')
    alarmUptEdtLayout.setAttribute('id',`uptedtBtn_${alarm.id}`)
    alarmUptEdtLayout.append(alarmEditBtnContents(alarm))
    alarmUptEdtLayout.append(alarmUpdateBtnContents(alarm))
    
    return alarmUptEdtLayout
}

// Display alarm edit button
const alarmEditBtnContents = (alarm) => {
    const alarmEditBtnLayout =document.createElement('button')
    alarmEditBtnLayout.classList.add('inline','bg-red-500','hover:bg-red-400','text-white','py-2','px-4','rounded-xl','border-0','w-1/3')
    setAttributes(alarmEditBtnLayout,{'id':`edit_${alarm.id}`,'data-alarm-id':`${alarm.id}`})
    alarmEditBtnLayout.addEventListener('click',()=>{enableEditTime(alarm)})
    alarmEditBtnLayout.innerHTML='Edit'
    return alarmEditBtnLayout
}

// Display alarm update button
const alarmUpdateBtnContents = (alarm) => {
    const alarmUpdateBtnLayout =document.createElement('button')
    alarmUpdateBtnLayout.classList.add('inline','bg-green-500','hover:bg-green-400','text-white','py-2','px-4','rounded-xl','border-0','w-1/3')
    setAttributes(alarmUpdateBtnLayout,{'id':`updt_${alarm.id}`,'data-alarm-id':`${alarm.id}`})
    alarmUpdateBtnLayout.addEventListener('click',()=>{updateAlarmDetail(alarm)})
    alarmUpdateBtnLayout.innerHTML='Update'
    return alarmUpdateBtnLayout
}




export const enableEditTime = (e) => {
    

    
    alarmID=e.getAttribute("data-alarm-id")
    
    var prev_time=document.querySelector(`#prev_${alarmID}`)
    prev_time.setAttribute('style','display:none')
    var prev_timeval=prev_time.getAttribute("data-time")
    var new_time=document.querySelector(`#time_${alarmID}`)
    new_time.setAttribute('style','width:100%')
    new_time.setAttribute('value',prev_timeval)
    e.setAttribute('onclick','undoChange(this)')
    e.innerHTML='Undo'
}

export const undoChange = (e) => {
    alarmID=e.getAttribute("data-alarm-id")
    
    var prev_time=document.querySelector(`#prev_${alarmID}`)
    prev_time.removeAttribute('style')

    var new_time=document.querySelector(`#time_${alarmID}`)
    new_time.setAttribute('style',"display:none")
    
    e.setAttribute('onclick','enableEditTime(this)')
    e.innerHTML='Edit'
    
}


